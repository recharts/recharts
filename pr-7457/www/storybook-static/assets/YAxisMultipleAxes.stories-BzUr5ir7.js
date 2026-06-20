import{R as t}from"./iframe-CbmcvRkz.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-C-NN2TSd.js";import{R as l}from"./zIndexSlice-DoKZE_fT.js";import{C as x}from"./ComposedChart-B9rJ9PPz.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BF-Kn5C-.js";import{L as a}from"./Line-cyvqn16I.js";import{X as c}from"./XAxis-BXkS-79Y.js";import{T as g}from"./Tooltip-BI_aTt7z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-prZAxsgN.js";import"./CartesianAxis-Duc97zpX.js";import"./Layer-aQjZulmS.js";import"./resolveDefaultProps-DSWLYRE0.js";import"./Text-CQlqdYfu.js";import"./DOMUtils-D_6a5VHc.js";import"./isWellBehavedNumber-D0V00cvg.js";import"./Label-CMFdvkIW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ByjAgEa2.js";import"./index-EVqr9zMt.js";import"./index-B4yUayYa.js";import"./types-aj_9xhUM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BID11n2_.js";import"./immer-BWk67B8y.js";import"./RechartsWrapper-C6OXESHp.js";import"./index-NV2k7-9r.js";import"./index-B7UJplH4.js";import"./axisSelectors-BFflKNFi.js";import"./d3-scale-Cq5I-Lzi.js";import"./CartesianChart-C9d6soJe.js";import"./chartDataContext-AyeK8CTN.js";import"./CategoricalChart-CbA9DUlt.js";import"./tooltipContext-Dp_Ucbm_.js";import"./AnimatedItems-C8brG2ut.js";import"./useAnimationId-Bg4LY1-F.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DL-7nMhN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-yEY4r1E4.js";import"./RegisterGraphicalItemId-BlnWChFK.js";import"./ErrorBarContext-Cf-_Bhe_.js";import"./GraphicalItemClipPath-BhK5nGk3.js";import"./SetGraphicalItem-CVVFn7G6.js";import"./getZIndexFromUnknown-B_xtgGmb.js";import"./graphicalItemSelectors-C9f7OtbQ.js";import"./Curve-Ba6UoBvx.js";import"./step-qj-9nXS-.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bm3DH6tK.js";import"./Dot-CYkHGb9U.js";import"./getRadiusAndStrokeWidthFromDot-D4nwke3n.js";import"./useElementOffset-CYZx6MBE.js";import"./uniqBy-UCX-Zdy2.js";import"./iteratee-DJKoVJ9l.js";import"./Cross-a0L3AOFH.js";import"./Sector-CTAwYSUQ.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
