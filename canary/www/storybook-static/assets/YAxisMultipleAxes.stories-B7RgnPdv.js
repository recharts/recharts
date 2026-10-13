import{R as t}from"./iframe-BpQ7m7wo.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DRCAJ4BY.js";import{R as l}from"./zIndexSlice-MwSCz61s.js";import{C as x}from"./ComposedChart-C-yEvf4A.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CI3acAoh.js";import{L as a}from"./Line-D_WboHkY.js";import{X as c}from"./XAxis-DE6o4Zll.js";import{T as g}from"./Tooltip-N7KlvHuJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BBIpfhf_.js";import"./Text-QB9mhIk2.js";import"./resolveDefaultProps-33rcogn6.js";import"./pageBackground-jCojFoRf.js";import"./isWellBehavedNumber-BVcmp2ni.js";import"./useId-Ba0OHruW.js";import"./useBackwardsCompatibleTheme-BV9LHmnt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BrTVgKud.js";import"./index-DAB_MUnB.js";import"./index-CD4MTvij.js";import"./axisSelectors-BYDkrwMW.js";import"./throttle-dkzrvgSW.js";import"./d3-scale-Byhs4CrR.js";import"./CartesianAxis-1RRtp3t2.js";import"./Layer-DlRoNKW0.js";import"./types-XUWAitbU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-82sk-Quf.js";import"./index-CXa8VbQ8.js";import"./index-BbHMTUSJ.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BVbz7wfB.js";import"./index-ByFVwCBJ.js";import"./CartesianChart-DMhVIjmV.js";import"./chartDataContext-84s_zl93.js";import"./CategoricalChart-CxhuSAqC.js";import"./activeStyles-C2IhZeJz.js";import"./useAnimationId-D3uGeL-A.js";import"./dataEntryStyles-CFn7kNor.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DVkCRlhI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DiATo6ey.js";import"./tooltipContext-DDhPdX-u.js";import"./ErrorBarContext-DyJjK28E.js";import"./GraphicalItemClipPath-CDr7mMLr.js";import"./SetGraphicalItem-FOIPn71v.js";import"./getZIndexFromUnknown-Zpc6D4Is.js";import"./useEffectiveDataKey-yqjBtOm2.js";import"./Curve-B_xnDCFo.js";import"./step-aBp-EU0i.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B2GxPwP4.js";import"./Dot-BNcOOzPX.js";import"./getRadiusAndStrokeWidthFromDot-_Kbwexmc.js";import"./useElementOffset-CVtmla25.js";import"./uniqBy-dxNZ9HnU.js";import"./iteratee-Cblj0Mci.js";import"./Cross-DB-PNF2H.js";import"./Sector-OZH_Lo5n.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
