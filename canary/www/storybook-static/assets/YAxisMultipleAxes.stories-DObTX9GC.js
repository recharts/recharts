import{R as t}from"./iframe-DZbjLUQo.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C0N5iwNJ.js";import{R as l}from"./zIndexSlice-kNjtHJvr.js";import{C as x}from"./ComposedChart-B2VCtYfx.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CMJK2iYb.js";import{L as a}from"./Line-IagRplkI.js";import{X as c}from"./XAxis-Cb9he-VA.js";import{T as g}from"./Tooltip-2fzgYbwj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-QWXq4PsH.js";import"./Text-DfE0Fd2l.js";import"./resolveDefaultProps-7vFM5A8a.js";import"./pageBackground-j9oVi7TB.js";import"./isWellBehavedNumber-C3IgPBb_.js";import"./useId-uis-dzmY.js";import"./useBackwardsCompatibleTheme-BfjKogZ5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CKCEdo-g.js";import"./index--Cvbr4ei.js";import"./index-s3XojKdv.js";import"./dataEntryStyles-OfgH0EAC.js";import"./axisSelectors-SzDg3mS0.js";import"./throttle-Cj_7MghT.js";import"./d3-scale-BGQa_b-A.js";import"./CartesianAxis-Bk45HDsq.js";import"./Layer-Dh4rshAh.js";import"./types-BIiFdC-Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Ds3e7SoF.js";import"./index-Fa7FBVrf.js";import"./index-DZ5C6rYB.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B7gpneaA.js";import"./index-DGK0wEWr.js";import"./CartesianChart-xRZlZbQd.js";import"./chartDataContext-DvL8FmIv.js";import"./CategoricalChart-D0VTS456.js";import"./activeStyles-jlHAdlvX.js";import"./useAnimationId-CK6aB1Dm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle--8czTBQy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ncETWQyV.js";import"./tooltipContext-BxxS945K.js";import"./RegisterGraphicalItemId-DrXewaeQ.js";import"./ErrorBarContext-BdWQYqFr.js";import"./GraphicalItemClipPath-BDvSZObJ.js";import"./SetGraphicalItem-BJ2EKqIC.js";import"./getZIndexFromUnknown-BvjAa1eF.js";import"./useEffectiveDataKey-DRn6J3kp.js";import"./omit-BhIDzA7q.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C9le9A2W.js";import"./step-BWJj5B7H.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Dic5JSob.js";import"./Dot-DCKsVFDm.js";import"./getRadiusAndStrokeWidthFromDot-ff8SiQS6.js";import"./useElementOffset-BqEhG3ye.js";import"./uniqBy-COgWTsrM.js";import"./iteratee-DFCPY5kb.js";import"./Cross-_uoJFZOo.js";import"./Sector-B41kLOtL.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
