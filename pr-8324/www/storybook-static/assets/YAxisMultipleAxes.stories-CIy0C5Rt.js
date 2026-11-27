import{R as t}from"./iframe-CxHJIaxn.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CePtpgW3.js";import{R as l}from"./zIndexSlice-B4J4SBJt.js";import{C as x}from"./ComposedChart-ZJvCku8z.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CZxejRCU.js";import{L as a}from"./Line-BGusFgF3.js";import{X as c}from"./XAxis-BtFfwAik.js";import{T as g}from"./Tooltip-Cl9vkhW-.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-VB2vAzvZ.js";import"./get-CjriyByo.js";import"./Label-M_CthLgf.js";import"./Text-BkIUM7GL.js";import"./ZIndexLayer-B_7zdP5R.js";import"./index-CTXNW52Q.js";import"./index-CCCil_M9.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Cypa3mep.js";import"./throttle-zrHO1Lk3.js";import"./axisSelectors-DToVA1z_.js";import"./diverging-AJjDHMaN.js";import"./CartesianAxis-DtD-UOrB.js";import"./Layer-CkJdGJLp.js";import"./types-BGw9U51_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BLYVCU7c.js";import"./index-DATl4CJn.js";import"./index-CNK9YebA.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-lHGqaVDW.js";import"./index-WkAKiv7J.js";import"./fillDefinitions-DRREg7Kz.js";import"./CartesianChart-BVZvuLTX.js";import"./chartDataContext-DfmCl9OG.js";import"./CategoricalChart-DlLRA4vO.js";import"./dataEntryStyles-DnDN_vpi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-AwN8DkOy.js";import"./useAnimationId-D_Yg6oAr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BHoE966L.js";import"./tooltipContext-9a1Rg7V8.js";import"./ErrorBarContext-BUUfXJQl.js";import"./activeStyles-BwCU-iTy.js";import"./SetGraphicalItem-Cp9BSKiw.js";import"./getZIndexFromUnknown-C257KuLs.js";import"./useEffectiveDataKey-BI2pOOYW.js";import"./omit-3IZhTV-p.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-D_HaNWL6.js";import"./Curve-D6sUhEtt.js";import"./step-DotuH85W.js";import"./path-BBMZd4YL.js";import"./ActivePoints-R1_oETV-.js";import"./Dot-Dme7I_-s.js";import"./Symbols-IHTx3wL0.js";import"./symbol-C32Av6Of.js";import"./useElementOffset-D0XE9GLh.js";import"./uniqBy-Xde66OV6.js";import"./iteratee-BBskpsD7.js";import"./Cross-DjanSu9o.js";import"./Sector-B4ZR08uK.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
