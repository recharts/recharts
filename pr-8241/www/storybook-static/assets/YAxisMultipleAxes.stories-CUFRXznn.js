import{R as t}from"./iframe-BoIdwylW.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-GNczrVGv.js";import{R as l}from"./zIndexSlice-PMZXbuz8.js";import{C as x}from"./ComposedChart-CtZqtgqM.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bgc3sHUc.js";import{L as a}from"./Line-C9V6t-D9.js";import{X as c}from"./XAxis-ClVSu1zU.js";import{T as g}from"./Tooltip-BZSYLkSX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B2lBcb4D.js";import"./Text-D_S4fT48.js";import"./resolveDefaultProps-CtzWd-qA.js";import"./ZIndexLayer-BYJgF0xG.js";import"./index-DNtzd00k.js";import"./index-D93QOL6W.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BUrHoreM.js";import"./throttle-DJovDE6i.js";import"./axisSelectors-CnNiq6Rh.js";import"./d3-scale-Asjkzq2w.js";import"./CartesianAxis-DE9aH7XM.js";import"./Layer-DnLGFXqh.js";import"./types-D0djA_gg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BcY34TaC.js";import"./index-Cb6O7Zhr.js";import"./index-DeVO3TjK.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-KwWkpOaO.js";import"./index-DLxdIIWm.js";import"./fillDefinitions-CK96g-PQ.js";import"./CartesianChart-RjOUEsRj.js";import"./chartDataContext-XVkCEP1D.js";import"./CategoricalChart-8Ce8TnvZ.js";import"./dataEntryStyles-CG-hLtdl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cws0XjiK.js";import"./useAnimationId-BZtpw3X8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BK27ZWgW.js";import"./tooltipContext-CvAsZq0Y.js";import"./ErrorBarContext-DqGqKTxS.js";import"./activeStyles-kk8IGRJt.js";import"./SetGraphicalItem-B5MmjNJa.js";import"./getZIndexFromUnknown-De3nvjVs.js";import"./useEffectiveDataKey-QRSJB29_.js";import"./omit-Dsblyt9d.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BucXWP1n.js";import"./step-cn3vFhcC.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Dv9hEuIy.js";import"./Dot-CLBNcaQB.js";import"./Symbols-Cpgbh6kd.js";import"./symbol-ChnJAo1F.js";import"./getRadiusAndStrokeWidthFromDot-DvyJSF9f.js";import"./useElementOffset-DHSsrRA3.js";import"./uniqBy-C09z32gb.js";import"./iteratee-C-EJIXKE.js";import"./Cross-CMokWgug.js";import"./Sector-CcN-T5T3.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
