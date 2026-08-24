import{R as t}from"./iframe-CIi4aQFr.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-NZvB3wWl.js";import{R as l}from"./zIndexSlice-Dh5k7YSi.js";import{C as x}from"./ComposedChart-B_APHvQA.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Cw_PFGvd.js";import{L as a}from"./Line-miPkldaS.js";import{X as c}from"./XAxis-CiR2CsZh.js";import{T as g}from"./Tooltip-O8EnSUQM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-_CQ4siSe.js";import"./Text-MCLT9Uur.js";import"./resolveDefaultProps-DFD1zbAv.js";import"./DOMUtils-BGqmQoYm.js";import"./isWellBehavedNumber-C0qU1KvT.js";import"./useId-6CqpgxoT.js";import"./useBackwardsCompatibleTheme-rhWVmcC-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-1sxgmC4q.js";import"./index-b81EtH6z.js";import"./index-glf-Y2ea.js";import"./RechartsWrapper-ZkQqyZzz.js";import"./index-DIad8aWY.js";import"./index-DQ9ajMSc.js";import"./throttle-DwQobNkr.js";import"./axisSelectors-B5t0SRDA.js";import"./d3-scale-DpZDns7V.js";import"./renderedTicksSlice-CDlJiGOR.js";import"./CartesianAxis-DFqSm48C.js";import"./Layer--pVrB_zY.js";import"./types-jFK-aXqG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D66kwqNc.js";import"./chartDataContext-Dyx-NDOp.js";import"./CategoricalChart-DmxebrUR.js";import"./AnimatedItems-BDFnApNF.js";import"./useAnimationId-DYWYqd07.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DZaoOiFu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DOGuq5rw.js";import"./tooltipContext-JKcJBh3_.js";import"./RegisterGraphicalItemId-Bb9-v4SQ.js";import"./ErrorBarContext-Dx6F5PJo.js";import"./GraphicalItemClipPath-3c2R7Wr9.js";import"./SetGraphicalItem-BSa5SMWZ.js";import"./getZIndexFromUnknown-DTjY6b-w.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DDMdjh60.js";import"./Curve-CmPgMf6O.js";import"./step-WUQpfHT0.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B-l9jXx9.js";import"./Dot-D1RE6CX3.js";import"./getRadiusAndStrokeWidthFromDot-Bp1zRMUA.js";import"./useElementOffset-BIPd_XJO.js";import"./uniqBy-Dpw5nYtX.js";import"./iteratee-C1zppXlK.js";import"./Cross-jMHs3ke5.js";import"./Sector-D6tbLl1i.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
