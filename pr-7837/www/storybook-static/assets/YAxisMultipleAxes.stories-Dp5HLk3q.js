import{R as t}from"./iframe-D--BifOA.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-kT_Dhc9L.js";import{R as l}from"./zIndexSlice-BS_bCBK-.js";import{C as x}from"./ComposedChart-CuIfpr-P.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BeCFELTE.js";import{L as a}from"./Line-qeb5AOli.js";import{X as c}from"./XAxis-Csoi6tJo.js";import{T as g}from"./Tooltip-BFgcyP5H.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CFZdNolQ.js";import"./Text-DqGbkrCU.js";import"./resolveDefaultProps-lipkooEs.js";import"./DOMUtils-DY29CBKb.js";import"./isWellBehavedNumber-Dtp514zB.js";import"./useId-CApYJX2H.js";import"./useBackwardsCompatibleTheme-Bk9F9dU7.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BREUw5RK.js";import"./index-BOkqGzp2.js";import"./index-CfjS_rv2.js";import"./RechartsWrapper-CSj-zOMY.js";import"./axisSelectors-BukMemNW.js";import"./throttle-CArjZiC0.js";import"./d3-scale-A0pa5PaW.js";import"./index-BU2LuEPQ.js";import"./index-w8XliPC1.js";import"./renderedTicksSlice-aSc_RQuV.js";import"./index-Bhmq51fs.js";import"./CartesianAxis-C4H8T_Ld.js";import"./Layer-DyzQQGzG.js";import"./types-Ba9pm5hc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CGnG6vua.js";import"./chartDataContext-DYtS61hX.js";import"./CategoricalChart-exrBt-zG.js";import"./AnimatedItems-Dg7VLsKy.js";import"./useAnimationId-DR1fMTy4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bs5Lck6m.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BVXEB5o6.js";import"./tooltipContext-Dg1YgP4p.js";import"./RegisterGraphicalItemId-BvCBLwbE.js";import"./ErrorBarContext-DfSUsFkF.js";import"./GraphicalItemClipPath-Bf92gQO6.js";import"./SetGraphicalItem-DcBb5qLP.js";import"./getZIndexFromUnknown-CMsMYJgE.js";import"./useGraphicalItemIdentity-pSJHNQYU.js";import"./Curve-B6JdyyX2.js";import"./step-DWnGBeyO.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BPt1O7jo.js";import"./Dot-BJReGaVO.js";import"./getRadiusAndStrokeWidthFromDot-CK_UfwUG.js";import"./useElementOffset-DmpHX-P0.js";import"./uniqBy-bPD_mXTF.js";import"./iteratee-5n_c6cHV.js";import"./Cross-CHOCkf8K.js";import"./Sector-DEamqHmv.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
