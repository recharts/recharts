import{R as t}from"./iframe-DM7I_Yyj.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Cygy87Ha.js";import{R as l}from"./zIndexSlice-fCEc0s5F.js";import{C as x}from"./ComposedChart-C0efLOGA.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-1-jAr9Z0.js";import{L as a}from"./Line-BuB5QTku.js";import{X as c}from"./XAxis-C9bS5ZnW.js";import{T as g}from"./Tooltip-wMX0pxjV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D7T4Ye9K.js";import"./Text-BHb-71ue.js";import"./resolveDefaultProps-juvHZLkB.js";import"./DOMUtils-x3LNgLWi.js";import"./isWellBehavedNumber-CD6T6Jdg.js";import"./useId-Cqy_j9lJ.js";import"./useBackwardsCompatibleTheme-ZcFSMvkr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DKb6XHFw.js";import"./index-tOsCsIz0.js";import"./index-BSGAosA0.js";import"./RechartsWrapper-8avap2Ow.js";import"./axisSelectors-C4a64MXg.js";import"./throttle-D9z--FMJ.js";import"./d3-scale-BeCTSUmZ.js";import"./index-BPHh1qic.js";import"./index-CtbzcRhJ.js";import"./renderedTicksSlice-D73l8EHs.js";import"./index-1HyAGRae.js";import"./CartesianAxis-CnfqwB17.js";import"./Layer-BuDBFoKe.js";import"./types-C2i2rvmz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BtvlbeE8.js";import"./chartDataContext-Bv5z90Vo.js";import"./CategoricalChart-DChxHazb.js";import"./AnimatedItems-Bps8ucZ8.js";import"./useAnimationId-ByMoBfgF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-NFBvjCpj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C8wHq7T4.js";import"./tooltipContext-DQY1ZJ_O.js";import"./RegisterGraphicalItemId-CHv-hOW4.js";import"./ErrorBarContext-u65-Bu8d.js";import"./GraphicalItemClipPath-ByPtBGRG.js";import"./SetGraphicalItem-BuE0ytWh.js";import"./getZIndexFromUnknown-Be5rn1ya.js";import"./useGraphicalItemIdentity-w6WnNdhF.js";import"./dataEntryStyles-BGzKPvHt.js";import"./Curve-DCsdrtWm.js";import"./step-BWu1v0QN.js";import"./path-DyVhHtw_.js";import"./ActivePoints-6ohdy_Z2.js";import"./Dot-C28FoeNl.js";import"./getRadiusAndStrokeWidthFromDot-Bx2TZeXM.js";import"./useElementOffset-D2TnO8Yd.js";import"./uniqBy-DrK2h0sx.js";import"./iteratee-CmV4JHhh.js";import"./Cross-BMb4vV30.js";import"./Sector-DMgWea_s.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
