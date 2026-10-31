import{R as t}from"./iframe-COxqCazb.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-ZsGxmqjy.js";import{R as l}from"./zIndexSlice-B4X5qRzI.js";import{C as x}from"./ComposedChart-DWRPdfx_.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DM4sU8KG.js";import{L as a}from"./Line-n5MGWX7b.js";import{X as c}from"./XAxis-DQrBzVHK.js";import{T as g}from"./Tooltip-D5HdmfjY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BiNM6_QG.js";import"./Text-C4rvSXOn.js";import"./resolveDefaultProps-yMt3tC3j.js";import"./DOMUtils-BLBk64WL.js";import"./pageBackground-zdIyeBG0.js";import"./ZIndexLayer-cSzqGwkX.js";import"./index-CmlNloJu.js";import"./index-BFPgWdWH.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-a1oAG-SZ.js";import"./throttle-D4LJPOuI.js";import"./axisSelectors-uSjAZrah.js";import"./d3-scale-D8xTnIof.js";import"./CartesianAxis-CjYDk6nf.js";import"./Layer-D2zViLNQ.js";import"./types-3E7AO6tV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CPgi-eJ3.js";import"./index-BQ5RDrN3.js";import"./index-BymcG2zO.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-MgEDcD8h.js";import"./index-BE8xWht0.js";import"./CartesianChart-lA_wA_-C.js";import"./ZIndexPortal-B9PAyW6q.js";import"./CategoricalChart-C0aYCun5.js";import"./LabelList-DLxGydTH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DcH1741B.js";import"./fillDefinitions-HVISG19w.js";import"./useAnimationId-CI1eTN6X.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DhrWvn7z.js";import"./tooltipContext-Cm1PQ1zm.js";import"./dataEntryStyles-DJkgxm7x.js";import"./ErrorBarContext-CSA0hXTc.js";import"./activeStyles-Dz5dwfdA.js";import"./SetGraphicalItem-DfnH2C1-.js";import"./getZIndexFromUnknown-gyH2FH8p.js";import"./useEffectiveDataKey-DbCVmzAC.js";import"./omit-DVHSWUAv.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C7Cjm8FO.js";import"./step-CbCZbxFO.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DN4_EmYC.js";import"./Dot-DR7axIwT.js";import"./Symbols-pJe31Clp.js";import"./symbol-DFh_91jg.js";import"./getRadiusAndStrokeWidthFromDot-gHegAbBA.js";import"./useElementOffset-DaKnhcyx.js";import"./uniqBy-CV6Bdmxk.js";import"./iteratee-B9rlrEY4.js";import"./Cross-Df7b1Ed4.js";import"./Sector-ChBjKAX8.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Xt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Xt as __namedExportsOrder,Wt as default};
