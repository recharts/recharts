import{c as t}from"./iframe-Dy-e7pIM.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BX0V94CN.js";import{g as l}from"./zIndexSlice-BAzwug6r.js";import{C as x}from"./ComposedChart-CBoFwAQh.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-DHD2fmgU.js";import{L as a}from"./Line-C_3X6bsH.js";import{X as A}from"./XAxis-CumYrXMb.js";import{T as g}from"./Tooltip-Ba3QtjBw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-D_U-7Kmb.js";import"./CartesianAxis-kW3aoD-D.js";import"./Layer-BQggJIEv.js";import"./resolveDefaultProps-BOUnRnbS.js";import"./Text-DrCcB5Q6.js";import"./DOMUtils-CWH-10kL.js";import"./isWellBehavedNumber-Bj92k7jm.js";import"./Label-Bd4SV5Lr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DgxZOhGb.js";import"./index-DUyY-sZ6.js";import"./index-B7Kt7cV8.js";import"./types-B745wbwD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D80uYtAJ.js";import"./immer-kVBDWM7h.js";import"./RechartsWrapper-D0mQ-9Gw.js";import"./index-SXoyUqv9.js";import"./index-rCxGgy9o.js";import"./axisSelectors-DHlr3EdZ.js";import"./d3-scale-MtjUkFvo.js";import"./CartesianChart-Cf77c1Wa.js";import"./chartDataContext-HpYadsZ6.js";import"./CategoricalChart-Csue9Qd9.js";import"./tooltipContext-Bpda8jyn.js";import"./ReactUtils-DdYRakW1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BL03ALcW.js";import"./useAnimationId-D1tL6Rir.js";import"./ActiveShapeUtils-FFunzflv.js";import"./RegisterGraphicalItemId-CWayAjG_.js";import"./ErrorBarContext-N7PuOz_i.js";import"./GraphicalItemClipPath-Birlsn4M.js";import"./SetGraphicalItem-rhS26CgA.js";import"./getZIndexFromUnknown-CaKlRU4E.js";import"./graphicalItemSelectors-CfFMNq7_.js";import"./Curve-rRxZ5v9J.js";import"./step-r56XM2D6.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bnfm65-K.js";import"./Dot-DJgC10rz.js";import"./getRadiusAndStrokeWidthFromDot-CBX6IKOe.js";import"./useElementOffset-DUL3oAoP.js";import"./uniqBy-Cl9Zf0qP.js";import"./iteratee-BiQdkXya.js";import"./Cross-fxfBIiUP.js";import"./Sector-CH-N9u2o.js";const Et={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Ct=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Ct as __namedExportsOrder,Et as default};
