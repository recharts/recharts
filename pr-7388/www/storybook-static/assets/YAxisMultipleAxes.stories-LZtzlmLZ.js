import{c as t}from"./iframe-ayfxMcMc.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CboDD1HN.js";import{g as l}from"./zIndexSlice-CBS9H6Fq.js";import{C as x}from"./ComposedChart-DzAczIPs.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-BIVkm2Ik.js";import{L as a}from"./Line-BbDXUOgX.js";import{X as A}from"./XAxis-CQCosfOX.js";import{T as g}from"./Tooltip-C25Z0DnF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DE-GTO8K.js";import"./CartesianAxis-CJYfwd48.js";import"./Layer-DRx_WgZU.js";import"./resolveDefaultProps-DUvm9h9z.js";import"./Text-D472vA6a.js";import"./DOMUtils-DhrlxvLL.js";import"./isWellBehavedNumber-0ySD8Cyp.js";import"./Label-ii_PgfeB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ChQFeTnT.js";import"./index-ChfXHuaM.js";import"./index-uB2AF80P.js";import"./types-DKuO6oNB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-kyxhp8XW.js";import"./immer-CvfGnc1k.js";import"./RechartsWrapper-Dt3ctKzU.js";import"./index-CnDnhuhh.js";import"./index-qYP6YSZE.js";import"./axisSelectors-DiADRWeJ.js";import"./d3-scale-DvksmR-t.js";import"./CartesianChart-asOappaa.js";import"./chartDataContext-ncJihXoM.js";import"./CategoricalChart-YvgC-s3M.js";import"./tooltipContext-CErG83J1.js";import"./ReactUtils-D4TRRjvu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BlYO1MRZ.js";import"./useAnimationId-CPZ6UJKm.js";import"./ActiveShapeUtils-gZf-7tTS.js";import"./RegisterGraphicalItemId-B5JbPzoa.js";import"./ErrorBarContext-Cs3TpoeV.js";import"./GraphicalItemClipPath-D8mHMzmD.js";import"./SetGraphicalItem-B-R5cRe6.js";import"./getZIndexFromUnknown-BwvG4_Co.js";import"./graphicalItemSelectors-3LsDXjJv.js";import"./Curve-CTFqdp98.js";import"./step-C4Edu8du.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BHkOA6iP.js";import"./Dot-DTml05Ju.js";import"./getRadiusAndStrokeWidthFromDot-CyMjRM5q.js";import"./useElementOffset-fSKqZFJ1.js";import"./uniqBy-CZ1HKjdU.js";import"./iteratee-CKfwSilq.js";import"./Cross-DZhq8NsE.js";import"./Sector-B7K_t6uS.js";const Et={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
