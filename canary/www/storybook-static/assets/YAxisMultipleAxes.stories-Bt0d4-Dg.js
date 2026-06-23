import{R as t}from"./iframe-BNzhvzzJ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Cl4-_k6Y.js";import{R as l}from"./zIndexSlice-7B2pJ9R1.js";import{C as x}from"./ComposedChart-C_iTu113.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DSQFKMBr.js";import{L as a}from"./Line-C2yueNGc.js";import{X as c}from"./XAxis-BHRl-pdi.js";import{T as g}from"./Tooltip-CyBpvAoJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bo6NWZXP.js";import"./CartesianAxis-LIK20Nid.js";import"./Layer-xsjkSAFG.js";import"./resolveDefaultProps-D9iASVgR.js";import"./Text-B7J48mXb.js";import"./DOMUtils-C0rqppVh.js";import"./isWellBehavedNumber-Bpef6lI6.js";import"./Label-Cch4VET0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DKk9ZSzt.js";import"./index-D7steQeu.js";import"./index-B9gOfTvg.js";import"./types-DwFKy1TI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-EPo0eGyT.js";import"./immer-_Il6apPt.js";import"./RechartsWrapper-DHcZLkJ-.js";import"./index-DJTE4prX.js";import"./index-7GSDLfD9.js";import"./axisSelectors-ceyKOVCq.js";import"./d3-scale-DfXMlVb2.js";import"./CartesianChart-CaZD9ouo.js";import"./chartDataContext-BcocN-0J.js";import"./CategoricalChart-C_ukC1b2.js";import"./tooltipContext-CyD7XMEk.js";import"./AnimatedItems-DiPaozpi.js";import"./useAnimationId-DMdK3Lv6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DLdg-C7_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CfEExsMK.js";import"./RegisterGraphicalItemId-Xkz1LIrr.js";import"./ErrorBarContext-_lt3AQQA.js";import"./GraphicalItemClipPath-BB5MRsg5.js";import"./SetGraphicalItem-Di0ECEKf.js";import"./getZIndexFromUnknown-Cl0ZGAoN.js";import"./graphicalItemSelectors-BsfNmkQw.js";import"./Curve-CqMKytty.js";import"./step-DPliw2Y2.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DK7nKZD0.js";import"./Dot-CBy41HLo.js";import"./getRadiusAndStrokeWidthFromDot-TKmNfgfy.js";import"./useElementOffset-BlJIB82n.js";import"./uniqBy-Bjs8gI_C.js";import"./iteratee-BzF2Jcrq.js";import"./Cross-BkJnnYgS.js";import"./Sector-C-381x-X.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
