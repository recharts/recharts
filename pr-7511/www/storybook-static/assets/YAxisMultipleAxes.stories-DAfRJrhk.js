import{R as t}from"./iframe-C1w5v_Qk.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BqOA8Xrc.js";import{R as l}from"./zIndexSlice-B1EdpB6R.js";import{C as x}from"./ComposedChart-Cez35_ir.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DyOjMmoh.js";import{L as a}from"./Line-DxJCS-G6.js";import{X as c}from"./XAxis-CLnm9us4.js";import{T as g}from"./Tooltip-Cv_3qTZh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BiWVgPl2.js";import"./CartesianAxis-CqJdjYKp.js";import"./Layer-DdWQTUzH.js";import"./resolveDefaultProps-CoJ3EeKY.js";import"./Text-CLhlhxNo.js";import"./DOMUtils-B6Ajdyx4.js";import"./isWellBehavedNumber-NxDVn2o3.js";import"./Label-C6ZIo4e5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C25IbVUt.js";import"./index-CsIOsjrg.js";import"./index-BlJOskHH.js";import"./types-D2g1bX1e.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CHw04Oxj.js";import"./throttle-xmruF8UK.js";import"./RechartsWrapper-CjIXVxen.js";import"./index-3W1J-0s3.js";import"./index-DRD7DMzc.js";import"./axisSelectors-CF8b5amj.js";import"./d3-scale-Vx2OsAoJ.js";import"./CartesianChart-DmhCfUcK.js";import"./chartDataContext-BJtHxGB9.js";import"./CategoricalChart-CQ9KgY5m.js";import"./tooltipContext-jICBwAKC.js";import"./AnimatedItems-DUYSPF-a.js";import"./useAnimationId-CzIDWQBI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DxJ4rwa9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-SLeDfFDD.js";import"./RegisterGraphicalItemId-B4g8fd0n.js";import"./ErrorBarContext-DUYo6JYI.js";import"./GraphicalItemClipPath-Ct_Dr2Hp.js";import"./SetGraphicalItem-BUNBwVyh.js";import"./getZIndexFromUnknown-BaynO1R8.js";import"./graphicalItemSelectors-BrKdDVI4.js";import"./Curve-j2uTsuDC.js";import"./step-C7bwrN9b.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C8Lsw_QN.js";import"./Dot-DKLsSZb_.js";import"./getRadiusAndStrokeWidthFromDot-BO1985Pr.js";import"./useElementOffset-B4XEk5D5.js";import"./uniqBy-Dea-SwIq.js";import"./iteratee-Bx2Ur57H.js";import"./Cross-pR3KFTBe.js";import"./Sector-i3EW3ywO.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
