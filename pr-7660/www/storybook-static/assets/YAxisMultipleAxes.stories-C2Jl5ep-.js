import{R as t}from"./iframe-DsANpUmI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Cm1QLXj3.js";import{R as l}from"./zIndexSlice-DvbQ_xRM.js";import{C as x}from"./ComposedChart-CC1tviS_.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Di5ZKI9y.js";import{L as a}from"./Line-Dnn5aHX6.js";import{X as c}from"./XAxis-75DaHKlQ.js";import{T as g}from"./Tooltip-pX9VPrv8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B4DeKwN7.js";import"./Text-CjTSiniW.js";import"./resolveDefaultProps-VCXcnZ86.js";import"./DOMUtils-kNujPIKB.js";import"./isWellBehavedNumber-Dg3vRfwI.js";import"./useId-B0Q44yTc.js";import"./useBackwardsCompatibleTheme-BBpmGxx6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-MPr2tp5c.js";import"./index-DLEQ2NY5.js";import"./index-D3xqrgS8.js";import"./RechartsWrapper-BDrHj0U2.js";import"./index-5L0AuTID.js";import"./index-BNBrr31l.js";import"./throttle-vYgBP45f.js";import"./axisSelectors-B-1KrEKd.js";import"./d3-scale-_QauBjGX.js";import"./renderedTicksSlice-BUDGobd4.js";import"./CartesianAxis-XsOc8jcn.js";import"./Layer-DYWDW_71.js";import"./types-CnYkNLV_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Cwf-uiEG.js";import"./chartDataContext-C2aYZmpD.js";import"./CategoricalChart-Di7Ri-zj.js";import"./AnimatedItems-rVlz1FJX.js";import"./useAnimationId-DetthuUW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C6m9_9yg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-nZLcFoMw.js";import"./tooltipContext-DmhWYTOl.js";import"./RegisterGraphicalItemId-Cpe7Zv2c.js";import"./ErrorBarContext-C9fSG5q2.js";import"./GraphicalItemClipPath-YjZkau9w.js";import"./SetGraphicalItem-BGt3myf-.js";import"./getZIndexFromUnknown-CXRhlWDP.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors--ZUkVueJ.js";import"./Curve-CRdwjUaH.js";import"./step-BYrDDVtV.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B0q4xgtH.js";import"./Dot-DxPtGh3x.js";import"./getRadiusAndStrokeWidthFromDot-Dxn9p5np.js";import"./useElementOffset-KPxvDBEN.js";import"./uniqBy-BG78mG2t.js";import"./iteratee-CaAmmWd3.js";import"./Cross-Bi4B-9m4.js";import"./Sector-D29kq0U6.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
