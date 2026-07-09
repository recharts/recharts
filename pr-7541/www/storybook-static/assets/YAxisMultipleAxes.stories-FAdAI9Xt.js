import{R as t}from"./iframe-B_vrQl8R.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BnsZeISF.js";import{R as l}from"./zIndexSlice-Cxwz8Tl-.js";import{C as x}from"./ComposedChart-yc7O9hvj.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DxwI6afl.js";import{L as a}from"./Line-DxooT10C.js";import{X as c}from"./XAxis-Ci68TUER.js";import{T as g}from"./Tooltip-DIEWHamE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BAwOMXAP.js";import"./Layer-Gd_R9sAX.js";import"./resolveDefaultProps-I1lUK0_w.js";import"./Text-DHNSM_o8.js";import"./DOMUtils-BvPkU0IV.js";import"./isWellBehavedNumber-CBzBJL74.js";import"./Label-CvVA6TIG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DUE9jsMX.js";import"./index-C_xOR2HM.js";import"./index-D5WptIo8.js";import"./types-B9Larr1k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BE8z1LZo.js";import"./throttle-Dyk5owXH.js";import"./RechartsWrapper-6qr9rM4_.js";import"./index-DskW-dUs.js";import"./index-HEwSZYID.js";import"./axisSelectors-DWL2EjSK.js";import"./d3-scale-ByBkJlb2.js";import"./CartesianChart-48RP5Lhn.js";import"./chartDataContext-sXI4Ore6.js";import"./CategoricalChart-C5bYZX9f.js";import"./tooltipContext-B3E0RZ-k.js";import"./AnimatedItems-CSL9mSPk.js";import"./useAnimationId-DAjnsWww.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-q-Ta0Kiu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-a0kgZEBq.js";import"./RegisterGraphicalItemId-Be581UAk.js";import"./ErrorBarContext-DjPqL-MC.js";import"./GraphicalItemClipPath-Bv2rP4gQ.js";import"./SetGraphicalItem-BqgYDJXb.js";import"./getZIndexFromUnknown-Dvst-Ctq.js";import"./graphicalItemSelectors-BKPq2-mP.js";import"./Curve-4ICuXbwR.js";import"./step-Ct9Ha3sC.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DphU-K4M.js";import"./Dot-D8Lfcwc2.js";import"./getRadiusAndStrokeWidthFromDot-BJX3V8Wn.js";import"./useElementOffset-B_HGDiJC.js";import"./uniqBy-DUbYgYPG.js";import"./iteratee-D-mRmhpM.js";import"./Cross-DyfvovC6.js";import"./Sector-C1IR77hT.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
