import{R as t}from"./iframe-D38iL5U2.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DusBbeDI.js";import{R as l}from"./zIndexSlice-Cm67KrxL.js";import{C as x}from"./ComposedChart-C9TDGW0Q.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-AbNLq22K.js";import{L as a}from"./Line-CtYC6NCl.js";import{X as c}from"./XAxis-DxvBJIAO.js";import{T as g}from"./Tooltip-BxKOkrFr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-khzbl4AQ.js";import"./CartesianAxis-C6E7eU9j.js";import"./Layer-BW7UV7J4.js";import"./resolveDefaultProps-CZPTys3h.js";import"./Text-DbYnM2_N.js";import"./DOMUtils-o62mw7wr.js";import"./isWellBehavedNumber-DYmqkCh1.js";import"./Label-CTZsXBnJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B3mrn3nC.js";import"./index-CiQf90fk.js";import"./index-CtVCdopk.js";import"./types-CVlGri0W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BJAgGPRy.js";import"./immer-D6830BYN.js";import"./RechartsWrapper-cRl9bCbj.js";import"./index-CrafHmD2.js";import"./index-BjsidNXN.js";import"./axisSelectors-31vNEB3v.js";import"./d3-scale-B4F2Cask.js";import"./CartesianChart-BM1M8_5y.js";import"./chartDataContext-kB1Q6Xdj.js";import"./CategoricalChart-CpYTfgB7.js";import"./tooltipContext-CCwTnwLl.js";import"./AnimatedItems-6eA2Tj-j.js";import"./useAnimationId-CrM4tScF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BaDJNhGo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DKkm8SfY.js";import"./RegisterGraphicalItemId-D4Xqb6PN.js";import"./ErrorBarContext-BaHC-CpM.js";import"./GraphicalItemClipPath-CgNMFQt0.js";import"./SetGraphicalItem-D8AKKKBR.js";import"./getZIndexFromUnknown-CtGXtzTh.js";import"./graphicalItemSelectors-BvV69LyD.js";import"./Curve-BojgfvlB.js";import"./step-0VurBbtl.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CKKFmVGR.js";import"./Dot-CGulo8wH.js";import"./getRadiusAndStrokeWidthFromDot-C_jGICtX.js";import"./useElementOffset-D7DgYNl3.js";import"./uniqBy-Cp1_UUmE.js";import"./iteratee-CHjXHaoo.js";import"./Cross-BYjRI3Ng.js";import"./Sector-CQb59x5M.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
