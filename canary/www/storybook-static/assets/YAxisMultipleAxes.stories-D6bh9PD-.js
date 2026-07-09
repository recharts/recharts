import{R as t}from"./iframe-1WG2GaGK.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DhndnEIx.js";import{R as l}from"./zIndexSlice-Cov-NdD7.js";import{C as x}from"./ComposedChart-oCH7LOuc.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BFiasIYW.js";import{L as a}from"./Line-B4LmlSzQ.js";import{X as c}from"./XAxis-B48KuXEj.js";import{T as g}from"./Tooltip-CrbHU2w3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CtKdIdzU.js";import"./Layer-DBIGyDPn.js";import"./resolveDefaultProps-B25CKbLH.js";import"./Text-Dz3dqWjs.js";import"./DOMUtils-BEiFehcN.js";import"./isWellBehavedNumber-B8fKCwi6.js";import"./Label-C04bXC5p.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DViTPcza.js";import"./index-5AmNG6XU.js";import"./index-B9GM_nGd.js";import"./types-CoEQwN0Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-yo2RGDNB.js";import"./throttle-CilGSGoA.js";import"./RechartsWrapper-DEOyl0D-.js";import"./index-VHVhx1s3.js";import"./index-4UOu-PIF.js";import"./axisSelectors-Z8eCsImY.js";import"./d3-scale-CmojMi_E.js";import"./CartesianChart-Zn47P4p1.js";import"./chartDataContext-D8DLudE3.js";import"./CategoricalChart-SqRjK-fv.js";import"./tooltipContext-CvmqRbub.js";import"./AnimatedItems-4pikexb5.js";import"./useAnimationId-CnlBu4wu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CSfdiBYy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--OE9DBaA.js";import"./RegisterGraphicalItemId-kBJx_8Si.js";import"./ErrorBarContext-odKApO7t.js";import"./GraphicalItemClipPath-CPz3ISZ8.js";import"./SetGraphicalItem-C1oEpLce.js";import"./getZIndexFromUnknown-C8R2uKac.js";import"./graphicalItemSelectors-BER8UMX1.js";import"./Curve-E4cJetkR.js";import"./step-BCYuq7V7.js";import"./path-DyVhHtw_.js";import"./ActivePoints-QnPfRyyM.js";import"./Dot-DPmzUGmI.js";import"./getRadiusAndStrokeWidthFromDot-Be8-hX5d.js";import"./useElementOffset-CzZdzVLP.js";import"./uniqBy-gRFmhWu-.js";import"./iteratee-CT0EjMPh.js";import"./Cross-CY8Ov4nG.js";import"./Sector-BNmIP3Fj.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
