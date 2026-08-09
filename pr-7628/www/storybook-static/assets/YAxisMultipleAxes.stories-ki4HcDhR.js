import{R as t}from"./iframe--KdzZtf9.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CoP3OSHi.js";import{R as l}from"./zIndexSlice-CHztvQxJ.js";import{C as x}from"./ComposedChart-hjuG2iDf.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DgAqdHx3.js";import{L as a}from"./Line-CLz33ZR0.js";import{X as c}from"./XAxis-BtfaW-Ms.js";import{T as g}from"./Tooltip-_1wfcGQ4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Bwq_3Ge6.js";import"./Text-DiczCyux.js";import"./resolveDefaultProps-DclZvKxN.js";import"./DOMUtils-DCy02iSc.js";import"./isWellBehavedNumber-vpVCWLp_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer--b9avAgZ.js";import"./index-S42N58hu.js";import"./index-BmB7_o0P.js";import"./RechartsWrapper-DbMAL-gW.js";import"./index-q7cE3wgI.js";import"./index-BlCKzZxU.js";import"./throttle-hG26ZCHv.js";import"./axisSelectors-DJc-QTCs.js";import"./d3-scale-DQou-uOy.js";import"./renderedTicksSlice-D0sDrWJo.js";import"./CartesianAxis-8V80jjh3.js";import"./Layer-DCgJY1vZ.js";import"./types-DxjttXzA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CFhBSuLJ.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-tb7UCCzE.js";import"./chartDataContext-sbVF-hg4.js";import"./CategoricalChart-DmFxRtAx.js";import"./tooltipContext-BQ96WVr5.js";import"./AnimatedItems-Ca9tbEhj.js";import"./useAnimationId-Dz24l0hc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-24EhHdQN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BtJUa3Ui.js";import"./RegisterGraphicalItemId-DrHIocnK.js";import"./ErrorBarContext-DDlfLFIp.js";import"./graphicalItemIdentity-BErd8u6-.js";import"./SetGraphicalItem-BhKlnoJm.js";import"./getZIndexFromUnknown-D6DhCl8e.js";import"./graphicalItemSelectors-B9FW45H4.js";import"./Curve-Blx4pOcl.js";import"./step-CWWzJll9.js";import"./path-DyVhHtw_.js";import"./ActivePoints-9Jl-GXNH.js";import"./Dot-BnDtKOPm.js";import"./getRadiusAndStrokeWidthFromDot-Ccc-h-4F.js";import"./useElementOffset-DuPTW83n.js";import"./uniqBy-DGNEKTWG.js";import"./iteratee-BAaHiQpy.js";import"./Cross-rTbuR9fV.js";import"./Sector-emOqlKu7.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Kt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Kt as __namedExportsOrder,vt as default};
