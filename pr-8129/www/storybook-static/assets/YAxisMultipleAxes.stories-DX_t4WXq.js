import{R as t}from"./iframe-CIzVR-2-.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BM-BvKCY.js";import{R as l}from"./zIndexSlice-CJv9lj0d.js";import{C as x}from"./ComposedChart-OQrQnGRh.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-NqM9nJn7.js";import{L as a}from"./Line-kvdINkjm.js";import{X as c}from"./XAxis-DuVjd9Cl.js";import{T as g}from"./Tooltip-Bi9uk3q6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-MgaHTNfc.js";import"./Text-D3Kha142.js";import"./resolveDefaultProps-BsWl2j-C.js";import"./DOMUtils-D-TrccP0.js";import"./pageBackground-DPTEcMe3.js";import"./ZIndexLayer-eeqaM0q4.js";import"./index-iVHvpgFv.js";import"./index-DkDw0AjC.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D4S23sJN.js";import"./throttle-g_l7Z0ZN.js";import"./axisSelectors-mbotnnaX.js";import"./d3-scale-CN1jPZAK.js";import"./CartesianAxis-B1xkqmAC.js";import"./Layer-BlSvO1E4.js";import"./types-Ci0QqKEV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CH4A0jxF.js";import"./index-B0W9noqG.js";import"./index-CJvlApl9.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CaOZ9lUC.js";import"./index-C8XfMsOR.js";import"./CartesianChart-BUE6q1Of.js";import"./ZIndexPortal-DNkKSpm6.js";import"./CategoricalChart-Bt9yIUeV.js";import"./LabelList-BTCEEH0Q.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CFbXfnvF.js";import"./fillDefinitions-CqtDfKww.js";import"./useAnimationId-BGu4RQqd.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-nEsdy7gj.js";import"./tooltipContext-DceeobfX.js";import"./dataEntryStyles-DxP76lNF.js";import"./ErrorBarContext-BpJZX0b6.js";import"./activeStyles-Dl0q6Ayx.js";import"./SetGraphicalItem-D1cjeVg8.js";import"./getZIndexFromUnknown-Bb95lncj.js";import"./useEffectiveDataKey-Bc7YBVWp.js";import"./omit-DfFtAPPG.js";import"./isArguments-yB-y1yaH.js";import"./Curve-qbG6zMME.js";import"./step-Ma_Va74-.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bfyy8a29.js";import"./Dot-CbUJ7B3N.js";import"./Symbols-C3CTyIIX.js";import"./symbol-N4VmGah0.js";import"./getRadiusAndStrokeWidthFromDot-MbD5sGJN.js";import"./useElementOffset-39obdmvK.js";import"./uniqBy-BCkSDL9F.js";import"./iteratee-CRTQKy1O.js";import"./Cross-DPUQkNJu.js";import"./Sector-CyDWbC_t.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
