import{R as t}from"./iframe-DFG5UB_B.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C9ahxlQr.js";import{R as l}from"./zIndexSlice-BfnucyES.js";import{C as x}from"./ComposedChart-DvBb4g9X.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DWdN7EX8.js";import{L as a}from"./Line-DbNr04kS.js";import{X as c}from"./XAxis-BGV0t6fj.js";import{T as g}from"./Tooltip-BX_C2Z3k.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BlYeas0v.js";import"./Text-CeNXkw59.js";import"./resolveDefaultProps-BatIk00Z.js";import"./DOMUtils-BhwdevaN.js";import"./isWellBehavedNumber-LLrASzdJ.js";import"./useId-s4zjQZaU.js";import"./useBackwardsCompatibleTheme-CQyv0Qul.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BhF6Z1GT.js";import"./index-CvfO2mCp.js";import"./index-DZ38vEa6.js";import"./RechartsWrapper-B6oLib6N.js";import"./axisSelectors-THUDlcaK.js";import"./throttle-8CKkbV4u.js";import"./d3-scale-CVPVhJLx.js";import"./index-DPl35esh.js";import"./index-CFKpipae.js";import"./renderedTicksSlice-BAoPBO0b.js";import"./index-Bx8tOa6m.js";import"./CartesianAxis-BNuKFBQN.js";import"./Layer-CTQ0XvXO.js";import"./types-DcAH2tiO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CyJda43K.js";import"./chartDataContext-CMj3DEnW.js";import"./CategoricalChart-DoM1RUNO.js";import"./AnimatedItems-DaUsoCvA.js";import"./useAnimationId-DtAgjjoV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DvysmnTh.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BBhCvNS_.js";import"./tooltipContext-CvcjT5_q.js";import"./RegisterGraphicalItemId-7hocZulP.js";import"./ErrorBarContext-SVRkM6ha.js";import"./GraphicalItemClipPath-Dn5pirN6.js";import"./SetGraphicalItem-B5Jco2Ub.js";import"./getZIndexFromUnknown-s2L__yrP.js";import"./useGraphicalItemIdentity-D1Y6AxtT.js";import"./Curve-D7P2ouTL.js";import"./step-Cpq8yTJq.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DcPgsYfH.js";import"./Dot-DokBxO_D.js";import"./getRadiusAndStrokeWidthFromDot-BtIvPgrq.js";import"./useElementOffset-CESdl8j9.js";import"./uniqBy-BvJpBkfI.js";import"./iteratee-CT_szyVB.js";import"./Cross-B0BI2ykV.js";import"./Sector-Cn30566z.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
