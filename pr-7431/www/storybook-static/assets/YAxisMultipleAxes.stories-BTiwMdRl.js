import{R as t}from"./iframe-CuVm1Ncb.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BIy4mhNn.js";import{R as l}from"./zIndexSlice-BZOjM71k.js";import{C as x}from"./ComposedChart-Jqs4ulRL.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DuVc2M-o.js";import{L as a}from"./Line-D32p7G7d.js";import{X as c}from"./XAxis-JtvtAXXy.js";import{T as g}from"./Tooltip-DBLd4KtR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-mh9AHsYH.js";import"./CartesianAxis-COqdKxvc.js";import"./Layer-CQ8j0Llf.js";import"./resolveDefaultProps-DXODA9k0.js";import"./Text-LNz2FUpv.js";import"./DOMUtils-C4aU1diQ.js";import"./isWellBehavedNumber-Cs5mv3EE.js";import"./Label-CyUXMRAJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-HG2Tdc6L.js";import"./index-DS-VAELW.js";import"./index-ezvYWD77.js";import"./types-DjM_wMjP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cq4cXI7l.js";import"./immer-qI_Lx1cT.js";import"./RechartsWrapper-DT5GAsrf.js";import"./index-2Eta-fPv.js";import"./index-CIKLroCx.js";import"./axisSelectors-BqRugZOv.js";import"./d3-scale-DhSEg32F.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BLDYaQ2w.js";import"./chartDataContext-CM4lnGiM.js";import"./CategoricalChart-BJmxSqzB.js";import"./tooltipContext-CNcdNagZ.js";import"./AnimatedItems-D-7ryyyq.js";import"./useAnimationId-DGicD8fh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-fz3Cheh_.js";import"./ActiveShapeUtils-ClNcGcwL.js";import"./RegisterGraphicalItemId-Ji3BKNxF.js";import"./ErrorBarContext-ftGml07d.js";import"./GraphicalItemClipPath-BofgE1jJ.js";import"./SetGraphicalItem-DDjVRXYZ.js";import"./getZIndexFromUnknown-BtXsb27C.js";import"./graphicalItemSelectors-C83oLtwe.js";import"./Curve-CK2N7RgZ.js";import"./step-BGKZVTtP.js";import"./path-DyVhHtw_.js";import"./ActivePoints-rNykwE9f.js";import"./Dot-Dt98x6dx.js";import"./getRadiusAndStrokeWidthFromDot-DDhP_K7H.js";import"./useElementOffset-WvcCUeh1.js";import"./uniqBy-DQgue2C1.js";import"./iteratee-CrZQWday.js";import"./Cross-DTx7UCxu.js";import"./Sector-CAZA4MrW.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
