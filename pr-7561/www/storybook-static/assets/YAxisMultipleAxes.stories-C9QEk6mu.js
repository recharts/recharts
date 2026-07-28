import{R as t}from"./iframe-BdYAncLR.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BEJGzNud.js";import{R as l}from"./zIndexSlice-5bpfVQyA.js";import{C as x}from"./ComposedChart-CAVG_F2Z.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DipcjUVR.js";import{L as a}from"./Line-Bpks10ih.js";import{X as c}from"./XAxis-CbeL6UmM.js";import{T as g}from"./Tooltip-Crtx4tku.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BX7MbhnQ.js";import"./Layer-DIV0oEbW.js";import"./resolveDefaultProps-5h8_lZEQ.js";import"./Text-C319EuNs.js";import"./DOMUtils-DBahITf2.js";import"./isWellBehavedNumber-_Cj0WZhc.js";import"./Label-JmhQBV8Y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-TIVdTQGS.js";import"./index-CGm2P49p.js";import"./index-B2x5-TIo.js";import"./types-OsxZUaOH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-L4Igrea0.js";import"./throttle-BjujQpzW.js";import"./RechartsThemeContext-D707JDBS.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-B45z8Y-R.js";import"./index-Du0b8e_w.js";import"./index-B0-wIR84.js";import"./axisSelectors-zM0j77wa.js";import"./d3-scale-23ottKw2.js";import"./CartesianChart-BhQs_YPC.js";import"./chartDataContext-CgP-nFTi.js";import"./CategoricalChart-Bp8IO2Nw.js";import"./tooltipContext-CYasNncA.js";import"./AnimatedItems-Dy_aktOc.js";import"./useAnimationId-CVihXN2U.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D5kCmVGB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DqTrL5g1.js";import"./RegisterGraphicalItemId-CwjribNO.js";import"./ErrorBarContext-IO5KIe3b.js";import"./GraphicalItemClipPath-1-xikmiv.js";import"./SetGraphicalItem-QdG8FGgR.js";import"./getZIndexFromUnknown-DLbx2sXa.js";import"./graphicalItemSelectors-CZ0r_s02.js";import"./Curve-Bi7tJxo-.js";import"./step-DGS-jgb3.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DqzUtciu.js";import"./Dot-axcqS0GT.js";import"./getRadiusAndStrokeWidthFromDot-B-U7YWSC.js";import"./useElementOffset-Bq6EO0f-.js";import"./uniqBy-Fvrf5pq2.js";import"./iteratee-BZcOrPZP.js";import"./Cross-DhPG0BJQ.js";import"./Sector-DlpC4iuy.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Kt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Kt as __namedExportsOrder,vt as default};
