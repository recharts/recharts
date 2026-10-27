import{R as t}from"./iframe-C-1IryXX.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BNLMUv-C.js";import{R as l}from"./zIndexSlice-fsCRj6jn.js";import{C as x}from"./ComposedChart-ldhMDYwV.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-3ypa2ByU.js";import{L as a}from"./Line-Dr6pYibn.js";import{X as c}from"./XAxis-DgA8soXs.js";import{T as g}from"./Tooltip-DCcQpeDs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BTNrgHMM.js";import"./Text-bsivD33T.js";import"./resolveDefaultProps-BhlxPQQ0.js";import"./pageBackground-BsKy__Zx.js";import"./ZIndexLayer-DcusPv6z.js";import"./index-D_guE_NV.js";import"./index-BpW2h4nW.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-nNfiNjC3.js";import"./throttle-_r7dS2f6.js";import"./dataEntryStyles-RoHSwMuf.js";import"./axisSelectors-DnbooZ92.js";import"./d3-scale-CK0ZBavL.js";import"./CartesianAxis-Boy6gEfE.js";import"./Layer-BY_4_n1M.js";import"./types-Ca1J50vn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B4PG9UaR.js";import"./index-BM9qHJ3l.js";import"./index-CaHSXMyC.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bb_GJAnC.js";import"./index-BbeXMPlB.js";import"./CartesianChart-X1Ss8Xb_.js";import"./ZIndexPortal-D1pWS7G9.js";import"./CategoricalChart-CCP7izw9.js";import"./LabelList-BgJAhVhH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BQECHtGD.js";import"./useAnimationId-B4AGcQCE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B19_Z8K8.js";import"./tooltipContext-D0AVn9Xk.js";import"./RegisterGraphicalItemId-BAsbW75f.js";import"./ErrorBarContext-CMFEKiC-.js";import"./activeStyles-DZ3GRzLP.js";import"./SetGraphicalItem-DzD-3glG.js";import"./getZIndexFromUnknown-Bg2Titf7.js";import"./useEffectiveDataKey-B3UErnsT.js";import"./omit-DnswMPG2.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BZP4AtoJ.js";import"./step-D97QNVl7.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Kxn86qrL.js";import"./Dot-DKVTZ3_d.js";import"./Symbols-DkSC4tBr.js";import"./symbol-D09AuR3g.js";import"./getRadiusAndStrokeWidthFromDot-CSG42cOl.js";import"./useElementOffset-CiN9yCdN.js";import"./uniqBy-CJHXXqVq.js";import"./iteratee-02qgE8DQ.js";import"./Cross-D-TYHapV.js";import"./Sector-Cq5EH9uE.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
