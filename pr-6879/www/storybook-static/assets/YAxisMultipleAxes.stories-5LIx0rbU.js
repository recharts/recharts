import{e as t}from"./iframe-B6ZCI1X-.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CtpClMsJ.js";import{Y as r}from"./YAxis-Bknejqsk.js";import{R as l}from"./arrayEqualityCheck-Vy2dcV_o.js";import{C as x}from"./ComposedChart-BW4GWPKl.js";import{B as o}from"./Bar-BlAac2xy.js";import{L as a}from"./Line-B1fwKAvO.js";import{X as c}from"./XAxis-C4uw1-2Q.js";import{T as A}from"./Tooltip-C7m83EDP.js";import{R as g}from"./RechartsHookInspector-B_-BIKM5.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BfRNrOjX.js";import"./CartesianAxis-Cgh_nqbT.js";import"./Layer-fYHElE4I.js";import"./Text-1BcInixy.js";import"./DOMUtils-DnJTSxHK.js";import"./Label-D44TMXj3.js";import"./PolarUtils-DT5LUPN4.js";import"./ZIndexLayer-NdV45W3l.js";import"./zIndexSlice-CZ608RYy.js";import"./types-lQyAqjcM.js";import"./hooks-B7AKPgu3.js";import"./axisSelectors-B7jgX05e.js";import"./RechartsWrapper-Cm4MNb60.js";import"./CartesianChart-3kl8J4OM.js";import"./chartDataContext-K1HgDw51.js";import"./CategoricalChart-DmGE5R29.js";import"./tooltipContext-iR4QyRDe.js";import"./ReactUtils-DztpHcKA.js";import"./ActiveShapeUtils-CayjX_j1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dvu--PZM.js";import"./useAnimationId-Czd9yhg2.js";import"./Trapezoid-CWebkWYz.js";import"./Sector-oW786f9C.js";import"./Symbols-BpZDCS87.js";import"./Curve-xA1LMbbI.js";import"./RegisterGraphicalItemId-CkZvvq8r.js";import"./ErrorBarContext-CRJ4zZZo.js";import"./GraphicalItemClipPath-BH-LuHt6.js";import"./SetGraphicalItem-BsBYfoCl.js";import"./getZIndexFromUnknown-ae47ogNu.js";import"./graphicalItemSelectors-BhWz4r4-.js";import"./ActivePoints-Dua7vnpk.js";import"./Dot-BNoOq719.js";import"./getRadiusAndStrokeWidthFromDot-CTkwUqhN.js";import"./useElementOffset-4jS_X3SG.js";import"./iteratee-BH1cr4Fj.js";import"./Cross-Nm4nOG6c.js";import"./index-DYaSePyf.js";import"./ChartSizeDimensions-B6sRHlXe.js";import"./OffsetShower-BW9M7Gqo.js";import"./PlotAreaShower-BOQNx6Qk.js";const yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ut=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,ut as __namedExportsOrder,yt as default};
