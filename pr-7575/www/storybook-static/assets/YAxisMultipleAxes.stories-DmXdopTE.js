import{R as t}from"./iframe-DzzybHr3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CKuS-Mr_.js";import{R as l}from"./zIndexSlice-APm024yE.js";import{C as x}from"./ComposedChart-9Aj8MpN0.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BQxA2sHd.js";import{L as a}from"./Line-B14pcOUO.js";import{X as c}from"./XAxis-C2N3vX2E.js";import{T as g}from"./Tooltip-CobaQ_RT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Bp9IVHGC.js";import"./Layer-DBuOEsC-.js";import"./resolveDefaultProps-CV8kmKtp.js";import"./Text-CKYGhwj_.js";import"./DOMUtils-CofpyxHf.js";import"./isWellBehavedNumber-DhXkb0Zj.js";import"./Label-Yw7Q0JfB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B65O7Oyl.js";import"./index-CNtIrdbG.js";import"./index-YXsj3yx_.js";import"./types-Ck7x6Nhk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BnoTH0LX.js";import"./throttle-DXJQ7qa7.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-BQrYaWuY.js";import"./index-DKv_ekDa.js";import"./index-BbqbzQag.js";import"./axisSelectors-DxliL3D-.js";import"./d3-scale-ikjFpXkq.js";import"./CartesianChart-C60EyfpF.js";import"./chartDataContext-mNy84WxM.js";import"./CategoricalChart-B7eTVHmG.js";import"./tooltipContext-CRNSKdn8.js";import"./AnimatedItems-CJCL0mBl.js";import"./useAnimationId--dSVNcdm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-1YG-OgZS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CXtuLtCa.js";import"./RegisterGraphicalItemId-r8RRCwhl.js";import"./ErrorBarContext-CW8Stc7O.js";import"./GraphicalItemClipPath-BPmTqE-t.js";import"./SetGraphicalItem-Dv_WYCgN.js";import"./getZIndexFromUnknown-aIczdU7c.js";import"./graphicalItemSelectors-CPc8JmzW.js";import"./Curve-CgifKxr5.js";import"./step-CE07F2xj.js";import"./path-DyVhHtw_.js";import"./ActivePoints-gO5Bi9Sm.js";import"./Dot-BL6lif_-.js";import"./getRadiusAndStrokeWidthFromDot-40lXrNs0.js";import"./useElementOffset-W4H7iZmy.js";import"./uniqBy-BUqH8mTU.js";import"./iteratee-B57Un0sM.js";import"./Cross-RNdBZ8CM.js";import"./Sector-CzINYDTr.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
