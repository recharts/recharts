import{R as t}from"./iframe-O6BbDbFD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D4M42lWl.js";import{R as l}from"./zIndexSlice-ufl9shMa.js";import{C as x}from"./ComposedChart-BrGWNJAt.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BmKe5cZm.js";import{L as a}from"./Line-CvuXmhQn.js";import{X as c}from"./XAxis-DBoP-lnN.js";import{T as g}from"./Tooltip-akFsLPn_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-SH09pAJC.js";import"./Text-ti8Fj8zJ.js";import"./resolveDefaultProps-Tk25gN9F.js";import"./DOMUtils-BG1uuH7H.js";import"./isWellBehavedNumber-CZqzhzTI.js";import"./useId-Cennb_xj.js";import"./useBackwardsCompatibleTheme-DlXi3557.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bt9vBpxW.js";import"./index-BpSs36Jm.js";import"./index-C0YTM7Q0.js";import"./RechartsWrapper-CoeUwGvc.js";import"./index-CnIZ7xjW.js";import"./index-BUePfml7.js";import"./throttle-C3IkSeoT.js";import"./axisSelectors-B4uTofMj.js";import"./d3-scale-C59jQ7wQ.js";import"./renderedTicksSlice-B4DLXLOp.js";import"./CartesianAxis-B8nYUrro.js";import"./Layer-BCiB-dL4.js";import"./types-o_WouL0J.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B9Asj-o-.js";import"./chartDataContext-CMEfpaNZ.js";import"./CategoricalChart-aiOnciBW.js";import"./AnimatedItems-BmR1pSA0.js";import"./useAnimationId-DHIHugsV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C8trBQbW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CApqjo8g.js";import"./tooltipContext-RLkUKuxJ.js";import"./RegisterGraphicalItemId-DqjeB-Ir.js";import"./ErrorBarContext-CsR2u1pe.js";import"./GraphicalItemClipPath-DQtsyL-k.js";import"./SetGraphicalItem-BTWaHo9u.js";import"./getZIndexFromUnknown-Ay6wl0tk.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DWFN68Iw.js";import"./Curve-r6vAjm_u.js";import"./step-rmFojxwR.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BgZirJxM.js";import"./Dot-D6BD33aP.js";import"./getRadiusAndStrokeWidthFromDot-DUN_awyu.js";import"./useElementOffset-Dpoz46wZ.js";import"./uniqBy-CNBDR_xD.js";import"./iteratee-ZH8ZQkoC.js";import"./Cross-D33RwA4Z.js";import"./Sector-DIVyjiXZ.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
