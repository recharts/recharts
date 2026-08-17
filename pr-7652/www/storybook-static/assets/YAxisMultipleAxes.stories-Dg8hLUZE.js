import{R as t}from"./iframe-B8V7BJ0L.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BU97uoiQ.js";import{R as l}from"./zIndexSlice-D-1XQb3V.js";import{C as x}from"./ComposedChart-ixqus0AO.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-N7dNDDRi.js";import{L as a}from"./Line-Dm3fZtVe.js";import{X as c}from"./XAxis-R6swZGmX.js";import{T as g}from"./Tooltip-DHFP58XQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-eqtAA7cE.js";import"./Text-DNMx3NKa.js";import"./resolveDefaultProps-BVc4-u0s.js";import"./DOMUtils-BPFNazbq.js";import"./isWellBehavedNumber-DJ8Z02p0.js";import"./useBackwardsCompatibleTheme-DRsZnCOS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D9SG3bxa.js";import"./index-CEyD9286.js";import"./index-BrHErK0F.js";import"./RechartsWrapper-BnC-Jwam.js";import"./index-CpRh0f3d.js";import"./index-I3Tcx3uB.js";import"./throttle-CesEnXHC.js";import"./axisSelectors-CtDpom86.js";import"./d3-scale-C_Pwa9HE.js";import"./renderedTicksSlice-BEoD_C5H.js";import"./CartesianAxis-BCPc0Lsn.js";import"./Layer-DSZQNu8u.js";import"./types-Bynmgm1l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DbV6u1bg.js";import"./chartDataContext-DkhpcBdG.js";import"./CategoricalChart-CRJAPCFd.js";import"./AnimatedItems-D2zk6WJL.js";import"./useAnimationId-D0vrdmF4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle---gO3v41.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-EzXi-ssF.js";import"./tooltipContext-CEVPo_xf.js";import"./RegisterGraphicalItemId-BrpEQBfx.js";import"./ErrorBarContext-T5Q1bKBI.js";import"./GraphicalItemClipPath-C5JNAsGG.js";import"./SetGraphicalItem-Cww5wWY0.js";import"./getZIndexFromUnknown-CChIbJyP.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Docn_iQt.js";import"./Curve-_vFkPdEp.js";import"./step-Dn4gXRUd.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bcxj_Z9o.js";import"./Dot-CtEJdvTp.js";import"./getRadiusAndStrokeWidthFromDot-CrG0xVOS.js";import"./useElementOffset-BQ3aMjmL.js";import"./uniqBy-8Hs_PlTr.js";import"./iteratee-CVu6Uo0K.js";import"./Cross-CG3VqhlT.js";import"./Sector-CxR8sg-i.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
