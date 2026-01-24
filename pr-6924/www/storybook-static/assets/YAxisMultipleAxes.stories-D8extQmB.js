import{e as t}from"./iframe-BMCIaxKG.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CNrfi_Sb.js";import{Y as r}from"./YAxis-DfmH9Dom.js";import{R as l}from"./arrayEqualityCheck--GVOH9-X.js";import{C as x}from"./ComposedChart-BiUrjWP0.js";import{B as o}from"./Bar-9gbSH6ko.js";import{L as a}from"./Line-BYSysfKB.js";import{X as c}from"./XAxis-CQh89uUR.js";import{T as A}from"./Tooltip-CGifnB1H.js";import{R as g}from"./RechartsHookInspector-BEE5VJHB.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DYzg8zSB.js";import"./CartesianAxis-BYfW_8DA.js";import"./Layer-MWXbZbYh.js";import"./Text-C3pNOBoN.js";import"./DOMUtils-Bqla5JdC.js";import"./Label-DX5r6J7L.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-D3DglK0F.js";import"./zIndexSlice-B9Z5B7ke.js";import"./types-CjLOz-vL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DebnH94a.js";import"./axisSelectors-cgl3VJbu.js";import"./RechartsWrapper-Bb1gDQXi.js";import"./CartesianChart-B-ZCTtvW.js";import"./chartDataContext-oBen9I8F.js";import"./CategoricalChart-epx7zaIT.js";import"./tooltipContext-DbQ4U6Ut.js";import"./ReactUtils-5tDB8KCJ.js";import"./ActiveShapeUtils-DtnCQ-cg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B1cropaK.js";import"./useAnimationId-BmU-cqjD.js";import"./Trapezoid-CAvOGSEj.js";import"./Sector-DluXzhdl.js";import"./Symbols-DwSHOnga.js";import"./Curve-B-WNVokC.js";import"./RegisterGraphicalItemId-oN7HBHom.js";import"./ErrorBarContext-KqD_eRKg.js";import"./GraphicalItemClipPath-B2ari5YW.js";import"./SetGraphicalItem-CcB6KXss.js";import"./getZIndexFromUnknown-hiISf2Pg.js";import"./graphicalItemSelectors-Doxgifoh.js";import"./ActivePoints-3VFSNx0Z.js";import"./Dot-Bk1pRUj2.js";import"./getRadiusAndStrokeWidthFromDot-BdARBz_p.js";import"./useElementOffset-CqP1o4V0.js";import"./iteratee-C2T4gNsh.js";import"./Cross-CMeEtOq-.js";import"./index-a6yAW-au.js";import"./ChartSizeDimensions-B-pVWfha.js";import"./OffsetShower--s29U8Jg.js";import"./PlotAreaShower-CsN0ehbx.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
