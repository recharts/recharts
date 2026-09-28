import{R as t}from"./iframe-DVTI7asB.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B0eGMGZi.js";import{R as l}from"./zIndexSlice-VrE65LwJ.js";import{C as x}from"./ComposedChart-D0z3ruTF.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Or1Jwi_e.js";import{L as a}from"./Line-DHWvjFGt.js";import{X as c}from"./XAxis-B8cGJGN2.js";import{T as g}from"./Tooltip-B8SR9jQq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C5sDum5_.js";import"./Text-XQRKlDnX.js";import"./resolveDefaultProps-Brh9VJsQ.js";import"./DOMUtils--MlKRlg5.js";import"./isWellBehavedNumber-D3Ee2F4O.js";import"./useId-D-envRVe.js";import"./useBackwardsCompatibleTheme-CTYeO19p.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-MKguLFMj.js";import"./index-CBeOLa_K.js";import"./index-x2lkdleK.js";import"./RechartsWrapper-0XjKEbs7.js";import"./axisSelectors-BpjWm-Lu.js";import"./throttle-BWtzmmFP.js";import"./d3-scale-CTgt3q-T.js";import"./index-Dxlfd81A.js";import"./index-BME0E5Ea.js";import"./renderedTicksSlice-Dm0DClKF.js";import"./index-B1fyioQZ.js";import"./CartesianAxis-B7c0SFW_.js";import"./Layer-CKEADoVi.js";import"./types-BbyfnRjt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-TlzU5q-y.js";import"./chartDataContext-5tueJF_N.js";import"./CategoricalChart-DDdawTFM.js";import"./AnimatedItems-DqWEvMcn.js";import"./useAnimationId-CwgRschT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DR9uOGHN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DaFsN-Ec.js";import"./tooltipContext-BxZtXLsC.js";import"./RegisterGraphicalItemId-BCvN7nSY.js";import"./ErrorBarContext-BzIynu6X.js";import"./GraphicalItemClipPath-DpsQ0BRT.js";import"./SetGraphicalItem-Co1iXM8q.js";import"./getZIndexFromUnknown-BiZ_5tBQ.js";import"./useGraphicalItemIdentity-Bs2hvtnA.js";import"./dataEntryStyles-Cddtf00Q.js";import"./Curve-ad1Bykff.js";import"./step-BVPKFfuD.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BzEepdn2.js";import"./Dot-C6F_-u4G.js";import"./getRadiusAndStrokeWidthFromDot-C-yk404_.js";import"./useElementOffset-rrBJTLuZ.js";import"./uniqBy-BgA3F1Vh.js";import"./iteratee-BvFp8pOf.js";import"./Cross-BhJTE66h.js";import"./Sector-C58FB1jO.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
