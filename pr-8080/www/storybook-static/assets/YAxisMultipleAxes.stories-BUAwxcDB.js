import{R as t}from"./iframe-BzJSp-Lb.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DH3wuMUO.js";import{R as l}from"./zIndexSlice-CpY4G_41.js";import{C as x}from"./ComposedChart-BGxC8J4N.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Df1CrUgg.js";import{L as a}from"./Line-BVjDL0Y0.js";import{X as c}from"./XAxis-CLk9ccVg.js";import{T as g}from"./Tooltip-CnZZ1FQ3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CXAJ70oq.js";import"./Text-Di-RptE9.js";import"./resolveDefaultProps-D32Nc0UY.js";import"./pageBackground-8jgZJDd7.js";import"./useId-Cb7sX_a1.js";import"./ZIndexLayer-CGBlNVI9.js";import"./index-YB3txD15.js";import"./index-DEl98Bjo.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CKi8pQjD.js";import"./throttle-BdS6UYxD.js";import"./dataEntryStyles-eQjR1qV2.js";import"./axisSelectors-Dmo5ac34.js";import"./d3-scale-BS7oaQgh.js";import"./CartesianAxis-ImLT1R94.js";import"./Layer-Ci5AF7LX.js";import"./types-DTueBMDQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DRNaA9Q_.js";import"./index-GvdMQirt.js";import"./index-DTL6jccP.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-LKbuKCMS.js";import"./index-D2gj9RGS.js";import"./CartesianChart-BDSIE1-i.js";import"./chartDataContext-DNk2bkFc.js";import"./CategoricalChart-BXcX0RVa.js";import"./activeStyles-B_Yk1DNA.js";import"./useAnimationId-vzOulJcL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-COJJ_LvU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CPEFsget.js";import"./tooltipContext-BQCgoNZU.js";import"./RegisterGraphicalItemId-DeENaGzF.js";import"./ErrorBarContext-CPvXKihC.js";import"./SetGraphicalItem-Cc_8d-ll.js";import"./getZIndexFromUnknown-pUg2_Mae.js";import"./useEffectiveDataKey-Dlkdw6F3.js";import"./omit-CNibo81X.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DdA-p64w.js";import"./step-CKjxAWSD.js";import"./path-DyVhHtw_.js";import"./ActivePoints-gL4Smrft.js";import"./Dot-Bedwt1R7.js";import"./Symbols-C3MESPx5.js";import"./symbol-BGHOeo3E.js";import"./getRadiusAndStrokeWidthFromDot-DI7kq6ii.js";import"./useElementOffset-DR9OLuHh.js";import"./uniqBy-CSQkScZ5.js";import"./iteratee-xpgxqzFE.js";import"./Cross-DeILzgGw.js";import"./Sector-DQO2T2pR.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
