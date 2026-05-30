import{c as t}from"./iframe-CFdw7OF0.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BAT_0iNE.js";import{g as l}from"./zIndexSlice-D5FBk225.js";import{C as x}from"./ComposedChart-Z--IS1CR.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-D7TSl40o.js";import{L as a}from"./Line-cOG-eLoA.js";import{X as A}from"./XAxis-oGl6YnV0.js";import{T as g}from"./Tooltip-LgSYFZHU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-i3QN0OCy.js";import"./CartesianAxis-DvetSxxI.js";import"./Layer-DVYMAObc.js";import"./resolveDefaultProps-T_Ifm--9.js";import"./Text-Cow_E4O9.js";import"./DOMUtils-BavBrzJ4.js";import"./isWellBehavedNumber-Bx2m4Paj.js";import"./Label-2Qw5xNff.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-K1WjLJ6s.js";import"./index-CM5vwHXM.js";import"./index-RIEQ7tnC.js";import"./types-DRUeCAti.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CvMrYJlr.js";import"./immer-3q52nOMc.js";import"./RechartsWrapper-pofiw2Fq.js";import"./index-DM95XG_1.js";import"./index-C5nAfqWm.js";import"./axisSelectors-CDxqGeGZ.js";import"./d3-scale-B-4cH8vj.js";import"./CartesianChart-DSPLLrgp.js";import"./chartDataContext-zA7-YeX3.js";import"./CategoricalChart-AW1pE9Yw.js";import"./tooltipContext-4PtX8H7D.js";import"./ReactUtils-CaBU1i2i.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Od57b66I.js";import"./useAnimationId-opl2QVve.js";import"./ActiveShapeUtils-CucidJwG.js";import"./RegisterGraphicalItemId-BaAIN_Bd.js";import"./ErrorBarContext-B3ComckR.js";import"./GraphicalItemClipPath-DcU2KTuM.js";import"./SetGraphicalItem-D0G49xVf.js";import"./getZIndexFromUnknown-HLsPEL2M.js";import"./graphicalItemSelectors-3cpOgqVz.js";import"./Curve-CMXh5glG.js";import"./step-Crajo5M3.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BRiCC5vc.js";import"./Dot-BIcdqveY.js";import"./getRadiusAndStrokeWidthFromDot-DulN0eDG.js";import"./useElementOffset-C84_aF81.js";import"./uniqBy-Chp8xrv6.js";import"./iteratee-D26QWFLa.js";import"./Cross-DeOAH8tZ.js";import"./Sector-CIx1PkfB.js";const Et={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Ct=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Ct as __namedExportsOrder,Et as default};
