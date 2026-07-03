import{R as t}from"./iframe-C76fCBLt.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DFPJpwmP.js";import{R as l}from"./zIndexSlice-BsJGnMmn.js";import{C as x}from"./ComposedChart-CsRNgK1V.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-TwoaKyrm.js";import{L as a}from"./Line-DXBI9fRV.js";import{X as c}from"./XAxis-BrBJ2mML.js";import{T as g}from"./Tooltip-BNwOVkwS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Cfu8bLFh.js";import"./Layer-COsfpmfI.js";import"./resolveDefaultProps-B-pRQb2R.js";import"./Text-BtH4Ru5e.js";import"./DOMUtils-BPYJD_VQ.js";import"./isWellBehavedNumber-6CN-Ynbl.js";import"./Label-Dx0etugK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DTL30j5z.js";import"./index-DNHm-Slh.js";import"./index-DdHCa9pO.js";import"./types-BiK_KtGv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ChQt8XEs.js";import"./throttle-DuTovYxH.js";import"./RechartsWrapper-Dp2Q4tlU.js";import"./index-CKV5D6qs.js";import"./index-CdgAhURM.js";import"./axisSelectors-44DsbA90.js";import"./d3-scale-X-nthEaw.js";import"./CartesianChart-DpIJVUtf.js";import"./chartDataContext-xuvA9xY5.js";import"./CategoricalChart-BizDpfsn.js";import"./tooltipContext-qhCREoUJ.js";import"./AnimatedItems-QpEnlZxo.js";import"./useAnimationId-CEbYcbZq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CCZ51hnY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-PxqP6tZ6.js";import"./RegisterGraphicalItemId-D4GJEFJb.js";import"./ErrorBarContext-BvNNYD9p.js";import"./GraphicalItemClipPath-B6FRGk7o.js";import"./SetGraphicalItem-C9ktGnfi.js";import"./getZIndexFromUnknown-CqNbAGN-.js";import"./graphicalItemSelectors-CANcD4oO.js";import"./Curve-BzIujVSC.js";import"./step-UDFv_jwZ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-rl4j4hoo.js";import"./Dot-C9pDbdqv.js";import"./getRadiusAndStrokeWidthFromDot-DKT9RGri.js";import"./useElementOffset-BKWrj22b.js";import"./uniqBy-BisTCx5L.js";import"./iteratee-BmQyV-lV.js";import"./Cross-g7FHOHqR.js";import"./Sector-BqIux5bx.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
