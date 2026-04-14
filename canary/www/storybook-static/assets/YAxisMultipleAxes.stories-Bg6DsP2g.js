import{e as t}from"./iframe-BSb16JoR.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BjWuIzzh.js";import{R as l}from"./arrayEqualityCheck-CKi6Epe4.js";import{C as x}from"./ComposedChart-BAoNDz5r.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DUt68D_Y.js";import{L as a}from"./Line-CA2pMRZZ.js";import{X as A}from"./XAxis-BHgcURqr.js";import{T as g}from"./Tooltip-DORXG9Ys.js";import{R as f}from"./RechartsHookInspector-DGV6Ct7j.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DMpwxzt3.js";import"./Layer-DZYtcC2w.js";import"./resolveDefaultProps-Cg9Aa6Xm.js";import"./Text-GlnZRYGI.js";import"./DOMUtils-B7NSRuk7.js";import"./Label-tcp5Z6P8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-8dStJwlU.js";import"./zIndexSlice-Bd2Z7-yF.js";import"./immer-BeuBwnCt.js";import"./types-BvVKlSL_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-ZjnECHzq.js";import"./hooks-CGl6g5Kn.js";import"./axisSelectors-CQJQ3hKV.js";import"./d3-scale-BCQZ4ydZ.js";import"./RechartsWrapper-z7IieHp6.js";import"./index-Bpi9g4Xy.js";import"./CartesianChart-B4OwK7Ni.js";import"./chartDataContext-Cmf9_heI.js";import"./CategoricalChart-b3cJbLQD.js";import"./tooltipContext-CkcxG-eO.js";import"./ReactUtils-v-8YVmpF.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CQZggNZ2.js";import"./isPlainObject-BiZ1xmFL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C6I9faxi.js";import"./useAnimationId-BRGMijHA.js";import"./Trapezoid-BRhFJlA0.js";import"./Sector-C6wRPjnp.js";import"./Symbols-SIMNkJGH.js";import"./symbol-CgA8__kL.js";import"./step-g_dGXwfI.js";import"./Curve-CJKywfJT.js";import"./RegisterGraphicalItemId-C80kvS_1.js";import"./ErrorBarContext-D0q4JY8z.js";import"./GraphicalItemClipPath-DRfMkQNb.js";import"./SetGraphicalItem-Drb-mPqH.js";import"./getZIndexFromUnknown-Bt9tAT23.js";import"./graphicalItemSelectors-BxDLltGA.js";import"./ActivePoints-CXu9VOq4.js";import"./Dot-CVpd23iI.js";import"./getRadiusAndStrokeWidthFromDot-CY2Vn6BR.js";import"./useElementOffset-CAWkhzoo.js";import"./uniqBy-KIGisAvA.js";import"./iteratee-DKK5omGB.js";import"./Cross-BnybQRNa.js";import"./index-ZiErzFNv.js";import"./ChartSizeDimensions-BpGSMkxu.js";import"./OffsetShower-C7hr8qqJ.js";import"./PlotAreaShower-CvbFoVDy.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Tt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Tt as __namedExportsOrder,kt as default};
