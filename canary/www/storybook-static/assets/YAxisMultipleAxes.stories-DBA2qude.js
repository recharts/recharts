import{R as t}from"./iframe-B3isOhIl.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DVwvC3Cs.js";import{R as l}from"./zIndexSlice-B54EHMmU.js";import{C as x}from"./ComposedChart-DAKT1lAu.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BesC-7Hq.js";import{L as a}from"./Line-i0YCmvNd.js";import{X as c}from"./XAxis-XCclqj4B.js";import{T as g}from"./Tooltip-CHFsfwA0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CVF_BzUf.js";import"./Text-BQG2REj-.js";import"./resolveDefaultProps-CDjD_Xww.js";import"./pageBackground-DLA1FFDB.js";import"./isWellBehavedNumber-BqtgSWx4.js";import"./useId-BSb_3vlL.js";import"./useBackwardsCompatibleTheme-BnO74GVQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DVIMR7Fc.js";import"./index-l8cQaZi5.js";import"./index-BCE7BcH7.js";import"./axisSelectors-DsO3f3GY.js";import"./throttle-twRdBhxV.js";import"./d3-scale-C7hQHBL4.js";import"./CartesianAxis-CpEPqood.js";import"./Layer-DDNmqfG8.js";import"./types-BQEZ_W3y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-RPn9Fn_C.js";import"./index-DTYhzia9.js";import"./index-DD7K-mQd.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DMqUbMYB.js";import"./index-CTz2_SJP.js";import"./CartesianChart-B6c5jQVZ.js";import"./chartDataContext-CzVXhMmy.js";import"./CategoricalChart-BlqE1d7Y.js";import"./activeStyles-D2IXZFhG.js";import"./useAnimationId-BArccDj7.js";import"./dataEntryStyles-COQULstw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CbypY_BX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D_L17MSu.js";import"./tooltipContext-DPnQxXAI.js";import"./ErrorBarContext-C1S_4TWD.js";import"./GraphicalItemClipPath-CFeguTu_.js";import"./SetGraphicalItem-4H3JYgxm.js";import"./getZIndexFromUnknown-B9vBvZ3z.js";import"./useEffectiveDataKey-_8Y1huCA.js";import"./omit-K7thEirw.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DIW9jtlG.js";import"./step-Dv6pVXah.js";import"./path-DyVhHtw_.js";import"./ActivePoints-YnhJh1Z3.js";import"./Dot-BukrvTYR.js";import"./getRadiusAndStrokeWidthFromDot-iVxMWqst.js";import"./useElementOffset-Bt2O-KAE.js";import"./uniqBy-CLwCtMAQ.js";import"./iteratee-TbnSWGh6.js";import"./Cross-BYpdfAgk.js";import"./Sector-w4IeksJR.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
