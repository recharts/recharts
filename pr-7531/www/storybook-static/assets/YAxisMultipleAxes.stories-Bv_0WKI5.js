import{R as t}from"./iframe-CaZrduHG.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DyfSUlDI.js";import{R as l}from"./zIndexSlice-CvUTBx_8.js";import{C as x}from"./ComposedChart-Bo1OFqhY.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CbIW5Q9q.js";import{L as a}from"./Line-BZzowOBE.js";import{X as c}from"./XAxis-CHaMVHb_.js";import{T as g}from"./Tooltip-K2l47E_T.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DB1Mym72.js";import"./Layer-DIgzKEwe.js";import"./resolveDefaultProps-hTjQl1Jw.js";import"./Text-Rs_1_idd.js";import"./DOMUtils-CmlaPQx2.js";import"./isWellBehavedNumber-Ds6x18SL.js";import"./Label-BWJz-33r.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-dEGCaPIX.js";import"./index-CYnc97bp.js";import"./index-CdgMfIsn.js";import"./types-CJ_sW9YU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CarnP_oQ.js";import"./throttle-x_arNXZJ.js";import"./RechartsWrapper-6f4LgHbs.js";import"./index-dOcL02AF.js";import"./index-BkusJAc5.js";import"./axisSelectors-CbEPJ0ND.js";import"./d3-scale-EIFV6mVT.js";import"./CartesianChart-DiGyCZXM.js";import"./chartDataContext-BSaewpt8.js";import"./CategoricalChart-d16gVM5b.js";import"./tooltipContext-jfhWmHX9.js";import"./AnimatedItems-DghnEQ9g.js";import"./useAnimationId-Ddowgb5f.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BwbsF6Pn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-O1yKcLVj.js";import"./RegisterGraphicalItemId-pMJ6sSz4.js";import"./ErrorBarContext-B9ivevc9.js";import"./GraphicalItemClipPath-CRbchFTR.js";import"./SetGraphicalItem-0qDOjHM6.js";import"./getZIndexFromUnknown-g0xmMdNn.js";import"./graphicalItemSelectors-BxDyje9Y.js";import"./Curve-jKjHUG6Y.js";import"./step-C-Vvb7fY.js";import"./path-DyVhHtw_.js";import"./ActivePoints-dA3071Q3.js";import"./Dot-CvRN0Hh7.js";import"./getRadiusAndStrokeWidthFromDot-BNORI3ED.js";import"./useElementOffset-M2uTjwmd.js";import"./uniqBy-ClKVU6lM.js";import"./iteratee-DfJ2FbmX.js";import"./Cross-6SrpIpYe.js";import"./Sector-2ER15uV_.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
