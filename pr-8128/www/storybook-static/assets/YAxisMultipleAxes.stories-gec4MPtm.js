import{R as t}from"./iframe-CqZM7-m_.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-ae7SlnFd.js";import{R as l}from"./zIndexSlice-C2bhYwAU.js";import{C as x}from"./ComposedChart-bZT0Cb13.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-s6W-sAwP.js";import{L as a}from"./Line-Bo0PrlbL.js";import{X as c}from"./XAxis-KlRKQHwy.js";import{T as g}from"./Tooltip-BQnJD08k.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CFulNYa4.js";import"./Text-D-XPvK3p.js";import"./resolveDefaultProps-DIo2Sl-P.js";import"./DOMUtils-xk6ID9X9.js";import"./pageBackground-Bhwi_Yxq.js";import"./ZIndexLayer-CcqTqnO7.js";import"./index-C-aUkLsy.js";import"./index-DpXM8lGR.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DaUnHX5G.js";import"./throttle-BMiHfZwg.js";import"./axisSelectors-CU7asiQ5.js";import"./d3-scale-CaJTA9nk.js";import"./CartesianAxis-F_8zYdOn.js";import"./Layer--KWigSyO.js";import"./types-vIB-y3qp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D_esDvci.js";import"./index-CztSWwc1.js";import"./index-NyV8lhCm.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C-tKczMb.js";import"./index-DtqG7I3W.js";import"./CartesianChart-g7znHwgk.js";import"./ZIndexPortal-xTgrkJOp.js";import"./CategoricalChart-CjJTDTQz.js";import"./LabelList-DhQNMiPW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-uSuGTrTU.js";import"./fillDefinitions-1X04y-fM.js";import"./themeFill-CUygaBJV.js";import"./useAnimationId-Bff8cv61.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dat3aOlo.js";import"./tooltipContext-C3dWHiK2.js";import"./dataEntryStyles-Df1iMIlW.js";import"./ErrorBarContext-CF_mHvca.js";import"./activeStyles-cNHowlQL.js";import"./SetGraphicalItem-BGa3ruh5.js";import"./getZIndexFromUnknown-D8eNYpxd.js";import"./useEffectiveDataKey-B0QeK97Q.js";import"./omit-C681iIyE.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Drzcx3Ud.js";import"./step-v_r5NIvy.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BpTQnUkT.js";import"./Dot-DqP_pV0T.js";import"./Symbols-DzjBnU_i.js";import"./symbol-B1C_m7FV.js";import"./getRadiusAndStrokeWidthFromDot-CxqTtpIP.js";import"./useElementOffset-CUZP3X1Y.js";import"./uniqBy-eozDBzB3.js";import"./iteratee-8pecjru7.js";import"./Cross-D4MvJQNR.js";import"./Sector-C6Vzo1Ah.js";const Xt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},bt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,bt as __namedExportsOrder,Xt as default};
