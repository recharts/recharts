import{R as t}from"./iframe-Bzmu5HIk.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CurDeKAa.js";import{R as l}from"./zIndexSlice-DOqwIOxM.js";import{C as x}from"./ComposedChart-CmElcfxT.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CqDr1RHa.js";import{L as a}from"./Line-Dy4VpV_O.js";import{X as c}from"./XAxis-jQ_CxXuQ.js";import{T as g}from"./Tooltip-C0sYZp6-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BnPFFEHB.js";import"./Text-DqoobI6S.js";import"./resolveDefaultProps-CRF5GxOI.js";import"./DOMUtils-dt_U2Js1.js";import"./isWellBehavedNumber-DCtTU4mD.js";import"./useId-CJJMgP-t.js";import"./useBackwardsCompatibleTheme-CmmFKQCY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CHgZKeoE.js";import"./index-CS9ypgyw.js";import"./index-BU2ca08W.js";import"./RechartsWrapper-DCfV64tZ.js";import"./index-Bs5Y62tp.js";import"./index-DuAK0LiD.js";import"./throttle-By1_Q0f1.js";import"./axisSelectors-CQE5C8Tc.js";import"./d3-scale-mcjvwMyE.js";import"./renderedTicksSlice-aIMhvrWq.js";import"./CartesianAxis-ByUKa2Ph.js";import"./Layer-BIAwX0Ug.js";import"./types-CP805D0F.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D9cj75Uw.js";import"./chartDataContext-6ylcQe-7.js";import"./CategoricalChart-CH9SVF8Q.js";import"./AnimatedItems-C8pcPfP0.js";import"./useAnimationId-pFMJHbYK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BwyZeyJ3.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ByjLSOPq.js";import"./tooltipContext-DBHmmRIt.js";import"./RegisterGraphicalItemId-9b4sSDvA.js";import"./ErrorBarContext-BwVhmXYH.js";import"./GraphicalItemClipPath-DpslvBV-.js";import"./SetGraphicalItem-Xipmdhp5.js";import"./getZIndexFromUnknown-CmeEbgTP.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DKlv_OJ1.js";import"./Curve-CKwGe3YB.js";import"./step-BOb3jDRZ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bg1bvRXN.js";import"./Dot-B390M5o3.js";import"./getRadiusAndStrokeWidthFromDot-C9axG9oY.js";import"./useElementOffset-DUKr_KA9.js";import"./uniqBy-Bi1p8Whm.js";import"./iteratee-B9tCTKER.js";import"./Cross-xNO4Qo7l.js";import"./Sector-DQtYiwR3.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
