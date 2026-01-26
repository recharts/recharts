import{e as t}from"./iframe-CWA75x6f.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CNrfi_Sb.js";import{Y as r}from"./YAxis--OX2yYy6.js";import{R as l}from"./arrayEqualityCheck-BbPHrIiT.js";import{C as x}from"./ComposedChart-CikPPUoS.js";import{B as o}from"./Bar-CKWwcfPl.js";import{L as a}from"./Line-BNgkxC6S.js";import{X as c}from"./XAxis-DIb7kM4Q.js";import{T as A}from"./Tooltip-CxSt-rF6.js";import{R as g}from"./RechartsHookInspector-SnjudCfW.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BVW4aoQY.js";import"./CartesianAxis-CEnZCSRe.js";import"./Layer-Dyb8NBHJ.js";import"./Text-BJCnsyFb.js";import"./DOMUtils-DvhTIFrn.js";import"./Label-QjXIZu_1.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-C1tQmmyV.js";import"./zIndexSlice-BxnMOy2T.js";import"./types-ieTTG77J.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-Cs6aCTjY.js";import"./axisSelectors-BTTbx4UP.js";import"./RechartsWrapper-wD_Oxn-K.js";import"./CartesianChart-yuxJjJQJ.js";import"./chartDataContext-C93txyR3.js";import"./CategoricalChart-CD5Q6zer.js";import"./tooltipContext-CcLmKiM8.js";import"./ReactUtils-BsQxKoDK.js";import"./ActiveShapeUtils-DPDphSQY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BDQ_yE-B.js";import"./useAnimationId-CiXad0CX.js";import"./Trapezoid-xMIIQ6Hu.js";import"./Sector-CjAZzh8K.js";import"./Symbols-BfpcWYyT.js";import"./Curve-DzqGeZIr.js";import"./RegisterGraphicalItemId-BrDDbYpn.js";import"./ErrorBarContext-Bb8vM_ir.js";import"./GraphicalItemClipPath-BK1Cw2_u.js";import"./SetGraphicalItem-ERR7406L.js";import"./getZIndexFromUnknown-fcJuNc3Y.js";import"./graphicalItemSelectors-DNZwly0D.js";import"./ActivePoints-Dmg5s4MQ.js";import"./Dot-Bdf28i8O.js";import"./getRadiusAndStrokeWidthFromDot-BEv_HS27.js";import"./useElementOffset-Xph5u3Ao.js";import"./iteratee-YaRpC3LM.js";import"./Cross-CyOmNZiN.js";import"./index-rMQlUXxN.js";import"./ChartSizeDimensions-I7n2Q31L.js";import"./OffsetShower-ra48L2at.js";import"./PlotAreaShower-DRjHdJ_p.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
