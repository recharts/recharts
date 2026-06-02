import{c as t}from"./iframe-CbFBC3pt.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DVG7yXmp.js";import{g as l}from"./zIndexSlice-B8XantvI.js";import{C as x}from"./ComposedChart-Bc5HbX-g.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-vLlpsNYO.js";import{L as a}from"./Line-D5xEp1_i.js";import{X as A}from"./XAxis-CuiMGrX2.js";import{T as g}from"./Tooltip-srpLNmE9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CeJ-O4Ro.js";import"./CartesianAxis-CA9u32-P.js";import"./Layer-DTzSPWpf.js";import"./resolveDefaultProps-DZFSM3t8.js";import"./Text-BLKgh8ue.js";import"./DOMUtils-rSL8yp4p.js";import"./isWellBehavedNumber-D0PjXqnv.js";import"./Label-8xdcvYL4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BgzH297Q.js";import"./index-ZsssZYUM.js";import"./index-C2rCfHQ6.js";import"./types-CX4nwvsZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DaB_pXBU.js";import"./immer-BwRByMMH.js";import"./RechartsWrapper-C8YdywQb.js";import"./index-C4IztgfQ.js";import"./index-TGdP4Icg.js";import"./axisSelectors-DV4HNdRQ.js";import"./d3-scale-C98YhsaH.js";import"./CartesianChart-ByXMh7XU.js";import"./chartDataContext-DASovuhK.js";import"./CategoricalChart-BMWFvZBg.js";import"./tooltipContext-1cf4NF_l.js";import"./ReactUtils-PDSB0db_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BaQ7rI5r.js";import"./useAnimationId-B6jMJ5_9.js";import"./ActiveShapeUtils-CC3LhhHX.js";import"./RegisterGraphicalItemId-BWff6MJa.js";import"./ErrorBarContext-eKi9YHyC.js";import"./GraphicalItemClipPath-3Dbzdjfh.js";import"./SetGraphicalItem-D4AnrrJM.js";import"./getZIndexFromUnknown-CV157jOw.js";import"./graphicalItemSelectors-BU-bA2Rl.js";import"./Curve-BlF3DWpa.js";import"./step-NntPL7PC.js";import"./path-DyVhHtw_.js";import"./ActivePoints-losSAyHn.js";import"./Dot-rYx1Cydy.js";import"./getRadiusAndStrokeWidthFromDot-Dg3y-0Vr.js";import"./useElementOffset-WNt73Ltm.js";import"./uniqBy-DX3rhGUr.js";import"./iteratee-C94OH8qj.js";import"./Cross-D1PvKyxV.js";import"./Sector-g-iQgKRp.js";const Et={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
