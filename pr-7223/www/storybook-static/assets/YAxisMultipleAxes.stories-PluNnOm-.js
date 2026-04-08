import{e as t}from"./iframe-DCw0tqQR.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-C3HUNKiJ.js";import{R as l}from"./arrayEqualityCheck-C2tBZ1Qy.js";import{C as x}from"./ComposedChart-wlPyi7zj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-gyHwn_4k.js";import{L as a}from"./Line-CJv9DjSU.js";import{X as A}from"./XAxis-DMq4si8_.js";import{T as g}from"./Tooltip-D96StMtN.js";import{R as f}from"./RechartsHookInspector-Da0J_Xb_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-oFVfgyCE.js";import"./Layer-DecK4sAB.js";import"./resolveDefaultProps-BCiQMHzG.js";import"./Text-DQrSc9C-.js";import"./DOMUtils-xep50AIj.js";import"./Label-CVZgdgXC.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BYzXZQRZ.js";import"./zIndexSlice-pEXw6d_M.js";import"./immer-DgwGzr0K.js";import"./types-DB1MifHz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Bz3CfhIT.js";import"./hooks-BPO7V1JU.js";import"./axisSelectors-CtQi-3sb.js";import"./d3-scale-BoxOwXVD.js";import"./RechartsWrapper-DKHRd-Jp.js";import"./index-kR5_0WmK.js";import"./CartesianChart-ARcHu8Al.js";import"./chartDataContext-DTKyXvOp.js";import"./CategoricalChart-2d0K-n2g.js";import"./tooltipContext-Yd0dkIj1.js";import"./ReactUtils-ByaRZgWA.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-fUwPie4c.js";import"./isPlainObject-CI4Edtk9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CriYIqhs.js";import"./useAnimationId-S3q8t8Nn.js";import"./Trapezoid-C7C4G9Uc.js";import"./Sector-CZ4caSpO.js";import"./Symbols-Ox381-HO.js";import"./symbol-Bs1LM99d.js";import"./step-C_4-RC3B.js";import"./Curve-BWU1MAzM.js";import"./RegisterGraphicalItemId-DNtaubKm.js";import"./ErrorBarContext-B44IbcKq.js";import"./GraphicalItemClipPath-DLhSizGK.js";import"./SetGraphicalItem-D17tmuod.js";import"./getZIndexFromUnknown-DDU6-irb.js";import"./graphicalItemSelectors-Cv1vjDoD.js";import"./ActivePoints-Du2deo7S.js";import"./Dot-BE79MMoA.js";import"./getRadiusAndStrokeWidthFromDot-BifHNKhN.js";import"./useElementOffset-IIfWfiTv.js";import"./uniqBy-iHWEikWA.js";import"./iteratee-CUBZ09dl.js";import"./Cross-INzBBnO_.js";import"./index-CbS5rSne.js";import"./ChartSizeDimensions-DnWIR9Zc.js";import"./OffsetShower-DCtIXei-.js";import"./PlotAreaShower-AaZ9KRHa.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
