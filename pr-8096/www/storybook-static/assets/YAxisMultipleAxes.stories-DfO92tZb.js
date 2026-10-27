import{R as t}from"./iframe-u5XvksY5.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D_j8mX6u.js";import{R as l}from"./zIndexSlice-qPjBbXUc.js";import{C as x}from"./ComposedChart-bB_CptVE.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BHyHw6JB.js";import{L as a}from"./Line-LFMSmh-s.js";import{X as c}from"./XAxis-FOCUFVAl.js";import{T as g}from"./Tooltip-CZaSC32l.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-VbOnr0hr.js";import"./Text-DCsWNeTw.js";import"./resolveDefaultProps-BLkmbHVR.js";import"./pageBackground-XEfDP_WE.js";import"./ZIndexLayer-Y9UkGb_Q.js";import"./index-vwmUrPFZ.js";import"./index-CtoGLGiN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D58IkYNc.js";import"./throttle-B8qtKcg2.js";import"./axisSelectors-Bi0OjrmZ.js";import"./d3-scale-C5Gzvvl7.js";import"./CartesianAxis-C9X2Uzsi.js";import"./Layer-DZaDPYK5.js";import"./types-B_Vy1dAM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CduAdCWE.js";import"./index-BpuM8AnC.js";import"./index-HZYgYW5E.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-By94_cXW.js";import"./index-DkZbI5V5.js";import"./CartesianChart-9oGErKhp.js";import"./ZIndexPortal-B1bAvAqr.js";import"./CategoricalChart-BBgGbCCg.js";import"./LabelList-BkhbrOAx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bs9jcdbm.js";import"./useAnimationId-BOOGmCHa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-I4oRUBzq.js";import"./tooltipContext-DWQIE0BH.js";import"./dataEntryStyles-RGg8_IXa.js";import"./ErrorBarContext-D-07T4-U.js";import"./activeStyles-CGX86F5-.js";import"./SetGraphicalItem-kkTP1No9.js";import"./getZIndexFromUnknown-THeWY3ae.js";import"./useEffectiveDataKey-CHJtUCr7.js";import"./omit-CyNPTrPa.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DQLFDL8K.js";import"./step-Bpvz6PO-.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BV0ddqGy.js";import"./Dot-Wys9DpOC.js";import"./Symbols-dBRKeymS.js";import"./symbol-CdXzcvWo.js";import"./getRadiusAndStrokeWidthFromDot-bEnvbNkp.js";import"./useElementOffset-BLaMOS3s.js";import"./uniqBy-BCkqKtFw.js";import"./iteratee-CAJfiHj4.js";import"./Cross-Cd30wCuH.js";import"./Sector-Dx_HQUzt.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
