<template>
  <el-container class="wrap">
    <el-header>
      <h2>阿鸟的麻将教室</h2>
    </el-header>
    <el-main>
      <ul>
        <li>
          <h3>前言</h3>
          <p>
            麻将是一种中国古代发明的博弈游戏，牌类娱乐用具。它的基本打法简单，容易上手，但其中变化又极多，搭配组合因人而异，因此成为了一种最能吸引人的博弈游戏之一。
          </p>
          <p>
            打麻将有句俗话【七分靠<b>运气</b>，三分靠<b>实力</b>】，本文旨在提供分享一些简单的技巧以使提高实力的占比成分。
          </p>
        </li>
        <li>
          <h3>本质</h3>
          <p>
            从数学角度考虑，麻将其实是一个概率游戏。按照每一手的取舍来排列组合，组成胜利的方程式。
          </p>
          <img src="@dd/ma.jpg" alt="" />
          <i class="alt">[ 胜利的方程式 ]</i>
        </li>
        <li>
          <h3>玩家水平</h3>
          <p>菜鸟型</p>
          <span>眼中只有自己的牌，完全不看场上其他的牌。对局势一概不知。</span>
          <el-collapse v-model="ex1" class="example">
            <el-collapse-item title="建议：" name="1">
              <el-alert
                show-icon
                class="advise"
                description="请开始关注场上的牌，根据场上剩余的胡牌数或者其它牌数，来判断是否转张"
                type="info"
                :closable="false"
              ></el-alert>
              <div>
                <p>
                  例：当你单吊一万时，你发现场上其他人杠了二万。当牌局过半时，还没有一万打出的情况下，此时应该？
                </p>
                <el-button type="text" @click="show('hidden1')"
                  >点击查看解析</el-button
                >
                <p :class="hidden1">
                  解：因为二万已经被杠，组成【一二三万】的顺子被破坏，牌局过半还未有一万打出，此时其他三家手里捏有两个一万的概率较大。此时应该换张听牌。
                </p>
              </div>
            </el-collapse-item>
          </el-collapse>
          <p>达人型</p>
          <span>不仅看自己的牌，场上的牌也有关注，对局势有粗略的判断。</span>
          <el-collapse v-model="ex2" class="example">
            <el-collapse-item title="建议：" name="2">
              <el-alert
                show-icon
                class="advise"
                description="更加仔细的分析当前牌局"
                type="info"
                :closable="false"
              ></el-alert>
              <div>
                <p>
                  例：你有2张散牌【四万，七万】要打掉一张，此时场上已经打出过三张六万，为了防止放炮，此时打出哪张风险较低？
                </p>
                <el-button type="text" @click="show('hidden2')"
                  >点击查看解析</el-button
                >
                <p :class="hidden2">
                  解：首先罗列下胡四万七万的情景。
                  <el-table
                    border
                    :data="data"
                    :header-cell-style="handerMethod"
                    class="table"
                  >
                    <el-table-column
                      prop="p1"
                      label="胡四万的情况"
                      align="center"
                    ></el-table-column>
                    <el-table-column
                      prop="p2"
                      label="胡七万的情况"
                      align="center"
                    ></el-table-column>
                    <el-table-column
                      prop="p3"
                      label="p"
                      align="center"
                    ></el-table-column>
                    <el-table-column
                      prop="p4"
                      label="p"
                      align="center"
                    ></el-table-column>
                    <el-table-column
                      prop="d1"
                      label="p"
                      align="center"
                    ></el-table-column>
                    <el-table-column
                      prop="d2"
                      label="p"
                      align="center"
                    ></el-table-column>
                    <el-table-column
                      prop="d3"
                      label="p"
                      align="center"
                    ></el-table-column>
                    <el-table-column
                      prop="d4"
                      label="p"
                      align="center"
                    ></el-table-column>
                  </el-table>
                  <i class="tips"
                    >为简化表格数据4,44,7,77的情况未列入其中，他们不影响此次计算</i
                  >
                  去掉三张六万后
                  <el-table
                    border
                    :data="data"
                    :header-cell-style="handerMethod"
                    :cell-class-name="delLine"
                    class="table"
                  >
                    <el-table-column
                      prop="p1"
                      label="胡四万的情况"
                      align="center"
                    ></el-table-column>
                    <el-table-column
                      prop="p2"
                      label="胡七万的情况"
                      align="center"
                    ></el-table-column>
                    <el-table-column
                      prop="p3"
                      label="p"
                      align="center"
                    ></el-table-column>
                    <el-table-column
                      prop="p4"
                      label="p"
                      align="center"
                    ></el-table-column>
                    <el-table-column
                      prop="d1"
                      label="p"
                      align="center"
                    ></el-table-column>
                    <el-table-column
                      prop="d2"
                      label="p"
                      align="center"
                    ></el-table-column>
                    <el-table-column
                      prop="d3"
                      label="p"
                      align="center"
                    ></el-table-column>
                    <el-table-column
                      prop="d4"
                      label="p"
                      align="center"
                    ></el-table-column>
                  </el-table>
                  <i class="tips"
                    >剩余胡四万的情况有9种，胡七万的情况有6种。可以得出打四万的风险是七万的1.5倍</i
                  >
                </p>
              </div>
            </el-collapse-item>
          </el-collapse>
          <p>雀圣型</p>
          <span
            >不仅看自己的牌，场上的牌也有关注，还会根据其他三家的出牌，反推出手牌进行计算和猜想从而提高获胜概率。</span
          >
          <el-collapse v-model="ex3" class="example">
            <el-collapse-item title="建议：" name="3">
              <el-alert
                show-icon
                class="advise"
                description="雀圣可以给我提建议"
                type="info"
                :closable="false"
              ></el-alert>
            </el-collapse-item>
          </el-collapse>
        </li>
        <li>
          <h3>进攻</h3>
          <p>胡牌主要分为【科学麻将法】和【不科学麻将法】两种</p>
          <ul class="child">
            <li>
              <h4>科学麻将法</h4>
              <p>
                总的来说就是提高 [<el-link type="primary" href="#up1"
                  >上牌张数</el-link
                >] 和 [<el-link type="primary" href="#up2">胡牌张数</el-link>]
              </p>
              <h5 id="up1">上牌张数</h5>
              <p>例：假设将四筒作将（眼），距离听牌最快需要<b>三、七筒</b></p>
              <img src="../assets/e2.jpeg" alt="" />
              <p>
                此时摸起九筒，可以将九筒做将（眼），打出一筒。这样摸上<b>三、四、五、七筒</b>都可以听牌
              </p>
              <el-divider></el-divider>

              <h5 id="up2">胡牌张数</h5>
              <p>例一：现在<b>七万、四条</b>听牌中。</p>
              <img src="../assets/e1.jpeg" alt="" />
              <p>此时摸起三条，可以打出四条，转听<b>二、五、八条</b>。</p>
              <el-divider></el-divider>
              <p>例二：现在<b>一万、九条</b>听牌中。</p>
              <img src="../assets/e3.jpeg" alt="" />
              <p>此时摸起七条，可以打出九条，转听<b>二、五、八条</b>。</p>
              <el-divider></el-divider>
              <p>例三：现在<b>三筒、四筒</b>听牌中。</p>
              <img src="../assets/e4.jpeg" alt="" />
              <p>
                此时摸起四筒，可以打出五、八筒，听<b>二、五、八筒</b>。打出三筒，听<b>三、四、六、九筒</b>。
              </p>
              <el-divider></el-divider>
            </li>
            <li>
              <h4>不科学麻将法</h4>
              <el-button type="text" @click="show('hidden3')"
                >点击查看</el-button
              >
              <p :class="hidden3">
                当<b>运气</b>站在你这边，你也可以是<b>雀圣</b>！
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h3>防守</h3>
          <p>俗话说【少输当赢】。做好防守也是止损的手段</p>
          <span
            >当你摸了好几轮牌后，牌还是比小新老爸的脚还臭，此时防守也是一种不错的选择。想要化身冷酷的防守机器，更需要精准的判断局势和猜其它三家的做牌，难度也不低。此处仅分享一点简单的防守技巧。</span
          >

          <span style="margin-top: 15px"
            >1、最稳妥的是打和上家的一样的牌。</span
          >
          <br />
          <span>2、及早打出4、5、6的中间关键牌。</span>
          <br />
          <span>3、留下1、9和番字牌，最后打出。</span>
        </li>
        <li>
          <h3>结语</h3>
          <p>
            归根结底，打麻将只是一种娱乐活动。在春节来临之际和亲人朋友一起搓麻聊天，也是很好的促进感情交流的方式。但小赌怡情，大赌伤身。只有时刻保持良好的心态，才能成为真正的赢家。最后祝大家身体健康，虎虎生风，大吃四方。
          </p>
        </li>
      </ul>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      ex1: "",
      ex2: "",
      ex3: "",
      ex4: "",
      hidden1: "hidden",
      hidden2: "hidden",
      hidden3: "hidden",
      data: [
        {
          p1: "5 6",
          p2: "5 6",
          p3: "5 6",
          p4: "5 6",
          d1: "5 6",
          d2: "5 6",
          d3: "5 6",
          d4: "5 6",
        },
        {
          p1: "2 3",
          p2: "2 3",
          p3: "2 3",
          p4: "2 3",
          d1: "8 9",
          d2: "8 9",
          d3: "8 9",
          d4: "8 9",
        },
        {
          p1: "3 5",
          p2: "3 5",
          p3: "3 5",
          p4: "3 5",
          d1: "6 8",
          d2: "6 8",
          d3: "6 8",
          d4: "6 8",
        },
      ],
    };
  },
  methods: {
    show(val) {
      this[val] = "show";
    },
    handerMethod({ column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0 || columnIndex === 1) {
          this.$nextTick(() => {
            if (document.getElementsByClassName(column.id).length !== 0) {
              document
                .getElementsByClassName(column.id)[0]
                .setAttribute("colSpan", 4);
            }
          });
        }
      }
      return {};
    },
    delLine({ rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex !== 3 && columnIndex !== 7) {
          return "del_line";
        }
      }
      if (rowIndex === 2) {
        if (columnIndex === 4 || columnIndex === 5 || columnIndex === 6) {
          return "del_line";
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
b {
  color: #f56c6c;
}
.wrap {
  padding: 20px;
  max-width: 850px;
  border: 1px solid #dcdfe6;
  margin: 20px auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
h2 {
  border-bottom: 1px solid #dcdfe6;
  font-weight: 400;
  padding-bottom: 10px;
}
ul {
  li {
    span {
      text-indent: 20px;
      font-size: 14px;
      display: inline-block;
    }
    img {
      display: block;
      width: 100%;
      max-width: 800px;
    }
    i.alt {
      max-width: 800px;
      display: block;
      text-align: center;
      font-style: normal;
      font-size: 12px;
      color: #606266;
      margin: 10px 0;
    }
    i.tips {
      display: block;
      text-align: right;
      font-style: normal;
      font-size: 12px;
      color: #606266;
      margin-bottom: 15px;
    }
    .advise {
      margin-bottom: 15px;
    }
  }
}
.example {
  margin: 10px 20px;
}
.hidden {
  display: none;
  opacity: 0;
}
.show {
  display: block;
  animation: show 0.8s linear;
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.table {
  margin: 10px 0;
}
@media only screen and (max-width: 850px) {
  .wrap {
    border: none;
    box-shadow: none;
    margin: 0;
  }
}
@media only screen and (max-width: 400px) {
  html,
  body {
    font-size: 14px;
  }
  .wrap {
    border: none;
    box-shadow: none;
    margin: 0;
    padding: 0;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }
}
</style>
<style>
.del_line::after {
  content: no-open-quote;
  position: absolute;
  top: 51%;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #000;
}
.el-collapse {
  border-top: none !important;
}
.child p {
  font-size: 14px;
}
@media only screen and (max-width: 400px) {
  html,
  body {
    font-size: 14px;
  }
  .el-main {
    padding-top: 0 !important;
  }
}
</style>
