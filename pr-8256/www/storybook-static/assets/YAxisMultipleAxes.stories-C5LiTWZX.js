import{R as t}from"./iframe-Z3SayaVd.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-PP-Vs1t2.js";import{R as l}from"./zIndexSlice-Dh2HMKB6.js";import{C as x}from"./ComposedChart-i6W5PytN.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DbP1KHR5.js";import{L as a}from"./Line-n6wgVlI4.js";import{X as c}from"./XAxis-BsEr8UIp.js";import{T as g}from"./Tooltip-CjSCnT_4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-gVjZnKx0.js";import"./Text-DdcAXxQ7.js";import"./resolveDefaultProps-DNiWcqg9.js";import"./ZIndexLayer-y38pl_-1.js";import"./index--orTKKd0.js";import"./index-wtNxUfyP.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DRpHoHNx.js";import"./throttle-Dxt6SGJ3.js";import"./axisSelectors--kuv0hpR.js";import"./d3-scale-COX3gckA.js";import"./CartesianAxis-CDmW-YMV.js";import"./Layer-R9bgEcMl.js";import"./types-C7fTXY90.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B1QrN0Ft.js";import"./index-Byv9yEMF.js";import"./index-IODgrwVj.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-rHkMTZTL.js";import"./index-eVlhMApr.js";import"./fillDefinitions-YvUR7ZoJ.js";import"./CartesianChart-C0rkW4er.js";import"./chartDataContext-MZv5qjpR.js";import"./CategoricalChart-B9nlic4H.js";import"./dataEntryStyles-CdjRVARh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C9s6B2mt.js";import"./useAnimationId-CJJ1SFId.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-8h_kjkj8.js";import"./tooltipContext-BhBWEJk9.js";import"./ErrorBarContext-CcYlyxVe.js";import"./activeStyles-DoLNHT3-.js";import"./SetGraphicalItem-na8KM_FV.js";import"./getZIndexFromUnknown-Bvavo77o.js";import"./useEffectiveDataKey-COaHCNkR.js";import"./omit-B8hBrCOT.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-CRZbI57R.js";import"./Curve-5n5qGKoW.js";import"./step-BOsnLXQi.js";import"./path-DyVhHtw_.js";import"./ActivePoints-mT6mIIhN.js";import"./Dot-CnIUGRfT.js";import"./Symbols-D5F94Msa.js";import"./symbol-Cplhih6x.js";import"./useElementOffset-Bp-2_zay.js";import"./uniqBy-DSum8Wv6.js";import"./iteratee-JP_8kGzy.js";import"./Cross-wXMY7t0N.js";import"./Sector-BC703UDw.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
