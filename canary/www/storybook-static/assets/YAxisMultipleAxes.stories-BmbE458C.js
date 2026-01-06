import{e as t}from"./iframe-CKmpfOpL.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisProps-ByMyQu0r.js";import{Y as r}from"./YAxis-ho-us9Q5.js";import{R as l}from"./arrayEqualityCheck-CGTamc7H.js";import{C as x}from"./ComposedChart-CicuSwT1.js";import{B as o}from"./Bar-BcTuyE2m.js";import{L as a}from"./Line-DaQHc97g.js";import{X as c}from"./XAxis-BBRqfJxe.js";import{T as A}from"./Tooltip-DcsIazWj.js";import{R as f}from"./RechartsHookInspector-DZtkbE0Z.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-C7FTbt6F.js";import"./CartesianAxis-DmTSqBS2.js";import"./Layer-DhYkCEVl.js";import"./Text-DsSpVH1-.js";import"./DOMUtils-Bi3DtBC5.js";import"./Label-DnuO6Rjq.js";import"./PolarUtils-BmD-XZwK.js";import"./ZIndexLayer-B_sQwTbu.js";import"./zIndexSlice-CQqF6s7B.js";import"./types-BLY5tRwt.js";import"./hooks-BGbqk51h.js";import"./axisSelectors-Bt4_ZMoO.js";import"./RechartsWrapper-D1NbH_UG.js";import"./CartesianChart-B2JPCr5o.js";import"./chartDataContext-CLpm-ufS.js";import"./CategoricalChart-CCPcc9Jc.js";import"./tooltipContext-dPsf86pg.js";import"./ReactUtils-BXryAzdD.js";import"./ActiveShapeUtils-DCJZv5Uu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D_zs00yx.js";import"./useAnimationId-DzZ8q-8e.js";import"./Trapezoid-PdOQHAco.js";import"./Sector-DbmZtSEy.js";import"./Symbols-CFHhg7rN.js";import"./Curve-Bys97J5V.js";import"./RegisterGraphicalItemId-wa1Otpvd.js";import"./ErrorBarContext-gRwVRTek.js";import"./GraphicalItemClipPath-78XXJvtR.js";import"./SetGraphicalItem-DSgpGKPf.js";import"./getZIndexFromUnknown-CqM72nf0.js";import"./graphicalItemSelectors-Cs-wLzyO.js";import"./ActivePoints-ClWX87Gp.js";import"./Dot-CHqdM_F0.js";import"./getRadiusAndStrokeWidthFromDot-DvxIC_MO.js";import"./useElementOffset-BBYrqTei.js";import"./iteratee-DYyig2D7.js";import"./Cross-BEdInfga.js";import"./index-moZvkop3.js";import"./ChartSizeDimensions-DFNYoe11.js";import"./OffsetShower-9z7FzopR.js";import"./PlotAreaShower-C7JeV-Sm.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:g},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisProps)
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
