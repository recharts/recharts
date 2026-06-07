import{R as t}from"./iframe-DsrD6wpT.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-C8AD80e7.js";import{R as l}from"./zIndexSlice-DkgP7dBP.js";import{C as x}from"./ComposedChart-qq8cl2VI.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CFg5lR5p.js";import{L as a}from"./Line-dtEvmWP5.js";import{X as c}from"./XAxis-DizM2ccM.js";import{T as g}from"./Tooltip-EAczPu4K.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C10pg2Pt.js";import"./CartesianAxis-CiwuyPTT.js";import"./Layer-Cn-q1z5M.js";import"./resolveDefaultProps-DQfgYWkZ.js";import"./Text-BEnCKmcO.js";import"./DOMUtils-Cn9VGpSS.js";import"./isWellBehavedNumber-CgPFccj7.js";import"./Label-TNDcrVM2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D3qjSsRd.js";import"./index-Z0dAwhZH.js";import"./index-CKvlhhLQ.js";import"./types-B5JJF1dm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-VRajnlWn.js";import"./immer-BAPcb6RO.js";import"./RechartsWrapper-DIY-yJrq.js";import"./index-D23QGT2y.js";import"./index-DLTbKQJZ.js";import"./axisSelectors-CJUUuARo.js";import"./d3-scale-CqXFZCr9.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BgP_pNrE.js";import"./chartDataContext-CD2wssdB.js";import"./CategoricalChart-BwGaQnIJ.js";import"./tooltipContext-D4wXR-2t.js";import"./AnimatedItems-8lESwhOr.js";import"./useAnimationId-BDJzCpgi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Di4BNLUB.js";import"./ActiveShapeUtils-BxUohkw2.js";import"./RegisterGraphicalItemId-Ch7WvGaf.js";import"./ErrorBarContext-H2sebB4O.js";import"./GraphicalItemClipPath-CeOkm8u8.js";import"./SetGraphicalItem-DZD_Etrn.js";import"./getZIndexFromUnknown-DuyXBv5Y.js";import"./graphicalItemSelectors-CBTkQduC.js";import"./Curve-CpP-gaVa.js";import"./step-7WGc90nH.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bk2Pfh1p.js";import"./Dot-Cd38Ah6o.js";import"./getRadiusAndStrokeWidthFromDot-BIBWddww.js";import"./useElementOffset-LYJk09nJ.js";import"./uniqBy-DzPJq-Cc.js";import"./iteratee-D1ZEtHwF.js";import"./Cross-Bg8qnscY.js";import"./Sector-DwqNoys3.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
