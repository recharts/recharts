import{R as t}from"./iframe-D34TH6kS.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BB2iGVHg.js";import{R as l}from"./zIndexSlice-DaIxnBgS.js";import{C as x}from"./ComposedChart-LEsvyFPs.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-tSvlBU_S.js";import{L as a}from"./Line-CA8mNuGo.js";import{X as c}from"./XAxis-eUT57Vta.js";import{T as g}from"./Tooltip-BZwHxVtU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Bmp2qp_V.js";import"./Text-DnFfEMnn.js";import"./resolveDefaultProps-C_e5Jx4S.js";import"./DOMUtils-CL7ddNNK.js";import"./ZIndexLayer-CjBSjq3C.js";import"./index-CbUl4qJT.js";import"./index-BdPMZI3x.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CB23D7zz.js";import"./throttle-BpT9ifnU.js";import"./axisSelectors-Dy4Zn44Z.js";import"./d3-scale-DZnn2eaB.js";import"./CartesianAxis-BM-PI8Qd.js";import"./Layer-Dwmoii2m.js";import"./types-sVdhE-m7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BJ7Rgktl.js";import"./index-DmQdJSj7.js";import"./index-x328HEKx.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Dd_PV6Ah.js";import"./index-B0gBzv4y.js";import"./fillDefinitions-C7IVG_LK.js";import"./CartesianChart-DTsOd4db.js";import"./ZIndexPortal-DFRqCkn0.js";import"./CategoricalChart-DeDW5Ok8.js";import"./LabelList-1IdMTUqF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CkQXoZfZ.js";import"./useAnimationId-B9qHmTzi.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--tE3PBa7.js";import"./tooltipContext-DqSmtwC6.js";import"./dataEntryStyles-vZIv75R2.js";import"./ErrorBarContext-BpXycT31.js";import"./activeStyles-BhcCN1d0.js";import"./SetGraphicalItem-BAvkQ0nW.js";import"./getZIndexFromUnknown-PCAkaOYb.js";import"./useEffectiveDataKey-rXS-umfC.js";import"./omit-CYTpcbgM.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DynZHvMF.js";import"./step-ClOyd6C_.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CrE_aMeq.js";import"./Dot-Dl99GL8N.js";import"./Symbols-DvTMqivt.js";import"./symbol-CF9tVrFE.js";import"./getRadiusAndStrokeWidthFromDot-Cm9Ouxhm.js";import"./useElementOffset-Ipbyi-Tm.js";import"./uniqBy-HVU5otxv.js";import"./iteratee-P8VRTjFX.js";import"./Cross-BL7_RzjB.js";import"./Sector-d4TsYNLQ.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
