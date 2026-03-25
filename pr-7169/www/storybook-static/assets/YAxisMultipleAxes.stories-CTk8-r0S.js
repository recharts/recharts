import{e as t}from"./iframe-CB4rwuoz.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-BaJrW052.js";import{R as l}from"./arrayEqualityCheck-B0sfDo8e.js";import{C as x}from"./ComposedChart-YoWdVHlU.js";import{B as o}from"./Bar-BIPFVWOZ.js";import{L as a}from"./Line-0O1iT2mF.js";import{X as c}from"./XAxis-DCt1RS6w.js";import{T as A}from"./Tooltip-CbV8c3wz.js";import{R as g}from"./RechartsHookInspector-c3RyaB9m.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CMMIwY9U.js";import"./Layer-CF-S8dmg.js";import"./resolveDefaultProps-aRufe_6H.js";import"./Text-BQ5lZJu1.js";import"./DOMUtils-CBex0cbx.js";import"./Label-C4bu2feL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DoMA1dJ2.js";import"./zIndexSlice-CX5pCWFs.js";import"./immer-BWNyrJnU.js";import"./types-CgQDsaUM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-B7tbCiQT.js";import"./hooks-DoXZqLBz.js";import"./axisSelectors-BlEjC6I8.js";import"./d3-scale-BjYlm7DL.js";import"./RechartsWrapper-VUmZrQSA.js";import"./index-BgC6MCXe.js";import"./CartesianChart-Bwy1F3hm.js";import"./chartDataContext-D2Mcqnh5.js";import"./CategoricalChart-RjnDaFgq.js";import"./tooltipContext-D5iTOQdR.js";import"./ReactUtils-BKtMub4g.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CXBvI7fg.js";import"./isPlainObject-ExidMtfN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BToq8Jht.js";import"./useAnimationId-CLj3uDOB.js";import"./Trapezoid-oQAH4GDD.js";import"./Sector-C4kas-8x.js";import"./Symbols-CMdoO83a.js";import"./symbol-C980TeYk.js";import"./step-BgqYgAla.js";import"./Curve-DX-WNmjD.js";import"./RegisterGraphicalItemId-mDbm0o4v.js";import"./ErrorBarContext-C9ucf0NL.js";import"./GraphicalItemClipPath-CewNEzcT.js";import"./SetGraphicalItem-Df_Fprv_.js";import"./getZIndexFromUnknown-Df4s3J8D.js";import"./graphicalItemSelectors-6Ztty2tI.js";import"./ActivePoints-CemCp_OZ.js";import"./Dot-Dh6sbB0Q.js";import"./getRadiusAndStrokeWidthFromDot-BcBCYhRo.js";import"./useElementOffset-K5yP77dM.js";import"./uniqBy-BiWECRxk.js";import"./iteratee-_24P-b58.js";import"./Cross-fgYQklRZ.js";import"./index-DLNZT6vI.js";import"./ChartSizeDimensions-D60uICZH.js";import"./OffsetShower-C1ie4azQ.js";import"./PlotAreaShower-T2_0B54j.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
