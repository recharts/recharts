import{R as t}from"./iframe-Bvg5iw6Z.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DfqNaUIm.js";import{R as l}from"./zIndexSlice-Ds_NjbNn.js";import{C as x}from"./ComposedChart-20ZO85Nl.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-w_3qaSM_.js";import{L as a}from"./Line-X30bFimQ.js";import{X as c}from"./XAxis-DCRWzJVy.js";import{T as g}from"./Tooltip-Lj7TyvUX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DHB3VUn4.js";import"./CartesianAxis-_p8UXmcr.js";import"./Layer-irp4ME8h.js";import"./resolveDefaultProps-DdhPeWBo.js";import"./Text-DjnMaOWq.js";import"./DOMUtils-DJUlICsZ.js";import"./isWellBehavedNumber-BfXcmwrI.js";import"./Label-DkRUWIp2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BSVnK8Dt.js";import"./index-Ce12os93.js";import"./index-C7ALVEHS.js";import"./types-C-xtjdCV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BOSAcKeB.js";import"./immer-DHoEBynv.js";import"./RechartsWrapper-CHMdqOJQ.js";import"./index-D6uOIfEh.js";import"./index-DjoxYWbz.js";import"./axisSelectors-ChUTyiTu.js";import"./d3-scale-C3JFNDzB.js";import"./string-B6fdYHAA.js";import"./CartesianChart-B5xnpDkJ.js";import"./chartDataContext-C4maze1A.js";import"./CategoricalChart-D7IINMSs.js";import"./tooltipContext--wyt8dyf.js";import"./AnimatedItems-BUtl3ij7.js";import"./useAnimationId-BOUeGlQ3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-prsUXg1E.js";import"./ActiveShapeUtils-DAESvJMs.js";import"./RegisterGraphicalItemId-DtXuMSpf.js";import"./ErrorBarContext-CM-RxSPr.js";import"./GraphicalItemClipPath-VUPv1woh.js";import"./SetGraphicalItem-DwOFrAeq.js";import"./getZIndexFromUnknown-CrLsklXY.js";import"./graphicalItemSelectors-abwyxz13.js";import"./Curve-C6rubuUm.js";import"./step-CEyafom-.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DfDHJRbx.js";import"./Dot-dsakJdmW.js";import"./getRadiusAndStrokeWidthFromDot-DrdS8yiS.js";import"./useElementOffset-DAsw9AdB.js";import"./uniqBy-B9Wdfl7r.js";import"./iteratee-BBjRdKWi.js";import"./Cross-1MdmmQOd.js";import"./Sector-DYXtSTxy.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
