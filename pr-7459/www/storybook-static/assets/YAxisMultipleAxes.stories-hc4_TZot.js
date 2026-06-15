import{R as t}from"./iframe-CoKy4elT.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BJGGz_YN.js";import{R as l}from"./zIndexSlice-CY4yYEbq.js";import{C as x}from"./ComposedChart-BVJUWbH_.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-QrXKv0gM.js";import{L as a}from"./Line-SzjmsAH7.js";import{X as c}from"./XAxis-DsRQf7G7.js";import{T as g}from"./Tooltip-K6a2MI97.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BfSl0Rns.js";import"./CartesianAxis-DoYCv6Ih.js";import"./Layer-k2Wdsuzq.js";import"./resolveDefaultProps-CDt21lVt.js";import"./Text-DL1Q3xYK.js";import"./DOMUtils-YWM1N8Io.js";import"./isWellBehavedNumber-1a8W8TdO.js";import"./Label-MtH_fF3i.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Gbc9J2Kq.js";import"./index-Bjw5bEKW.js";import"./index-B3BiA27P.js";import"./types-Du-R6iBe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DBzopiP-.js";import"./immer-lWVojOeC.js";import"./RechartsWrapper-DkPhnPXC.js";import"./index-B6XlI2wQ.js";import"./index-C3h5ViMU.js";import"./axisSelectors-D-8m2pyG.js";import"./d3-scale-xTkB24fT.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DX79lhQp.js";import"./chartDataContext-JpjBb8GI.js";import"./CategoricalChart-DaCgDPQn.js";import"./tooltipContext-BylNZt6P.js";import"./AnimatedItems-CIond_pq.js";import"./useAnimationId-DCY8-kt_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CO7CILtg.js";import"./ActiveShapeUtils-CdBo7Ldv.js";import"./RegisterGraphicalItemId-CuDS2LmP.js";import"./ErrorBarContext-DteVVWve.js";import"./GraphicalItemClipPath-BE9EOFft.js";import"./SetGraphicalItem-Bcs0Y3bf.js";import"./getZIndexFromUnknown-DCY99Amk.js";import"./graphicalItemSelectors-DKZhjjw0.js";import"./Curve-B2xh1z9j.js";import"./step-DAyKFUyW.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BzkJ5aTL.js";import"./Dot-CVh_JGUT.js";import"./getRadiusAndStrokeWidthFromDot-DFePIRu3.js";import"./useElementOffset-DOdjfFuB.js";import"./uniqBy-CtAtk69m.js";import"./iteratee-BljMhTLe.js";import"./Cross-Bpe2S7--.js";import"./Sector-COV7TTg8.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
