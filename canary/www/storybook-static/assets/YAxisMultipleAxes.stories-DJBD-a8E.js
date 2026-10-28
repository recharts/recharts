import{R as t}from"./iframe-B5-NOQ5t.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BxGdoYHh.js";import{R as l}from"./zIndexSlice-CRh8M764.js";import{C as x}from"./ComposedChart-Cs-WfBMv.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CNUVYZpc.js";import{L as a}from"./Line-DcgWWTAC.js";import{X as c}from"./XAxis-BFljSmnb.js";import{T as g}from"./Tooltip-DSfNKNAb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Buxp0onk.js";import"./Text-B1H13EKo.js";import"./resolveDefaultProps-CzoCHCv3.js";import"./pageBackground-CQjz6Ds_.js";import"./ZIndexLayer-CDTqLj5d.js";import"./index-BByFyeZE.js";import"./index-B_jQtdqD.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-SkPOKFrV.js";import"./throttle-BmJCRGcn.js";import"./axisSelectors-CoB8fX7y.js";import"./d3-scale-BV3y_nyi.js";import"./CartesianAxis-BQONH3FI.js";import"./Layer-vSXC9HFp.js";import"./types-BMOXg_-b.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DXZVnJsv.js";import"./index-CwdbuGI9.js";import"./index-CyjoC35Z.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DlDVaHKU.js";import"./index-Dboi7S9M.js";import"./CartesianChart-CFWWZ1wD.js";import"./ZIndexPortal-BtWSCMSf.js";import"./CategoricalChart-DfZY2tZ6.js";import"./LabelList-D_E_aw3e.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B17Nym8J.js";import"./useAnimationId-CsdMGkaP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-khUUw2eu.js";import"./tooltipContext-pcr2pEIs.js";import"./dataEntryStyles-DTbCoLqH.js";import"./ErrorBarContext-x4ks4uU4.js";import"./activeStyles-DCKEH4qZ.js";import"./SetGraphicalItem-OxeVhn_0.js";import"./getZIndexFromUnknown-Du4k3NXS.js";import"./useEffectiveDataKey-CE1na-4k.js";import"./omit-fO6yY01H.js";import"./isArguments-yB-y1yaH.js";import"./Curve-JcmdhaiD.js";import"./step-CC8FisnC.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CT1sEpay.js";import"./Dot-Qrt0ET2t.js";import"./Symbols-Ol0rnrkZ.js";import"./symbol-DXpOMYfl.js";import"./getRadiusAndStrokeWidthFromDot-t_9z2IoB.js";import"./useElementOffset-RuET0wQK.js";import"./uniqBy-CQFuYkxP.js";import"./iteratee-Do7GGGp4.js";import"./Cross-DBjXfX2z.js";import"./Sector-BXCggyyt.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
