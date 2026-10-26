import{R as e}from"./iframe-CatpbanJ.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-D8aO7K4u.js";import{R as h}from"./zIndexSlice-BMWzHmEu.js";import{C as g}from"./ComposedChart-KfrZJSX3.js";import{L as x}from"./Line-Dd-G5LHq.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DWpKPZRY.js";import{T as V}from"./Tooltip-DNYEcnB4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-D1ZUqzID.js";import"./Layer-ElswMSOx.js";import"./resolveDefaultProps-BADc_Fld.js";import"./Text-CG59Fli3.js";import"./pageBackground-CULGASio.js";import"./useId-pkbKCVvH.js";import"./ZIndexLayer-ga9SMmxW.js";import"./index-EESjRsqH.js";import"./index-CWnngu7Y.js";import"./Label-CA5ryIJW.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BGfelowG.js";import"./throttle-CW9K2jjI.js";import"./dataEntryStyles-DxsZOfoL.js";import"./types-BWsJ_4qp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BgMwh8Is.js";import"./index-BeMb0fJc.js";import"./index-BmXPv5ws.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-ByEpyZG7.js";import"./RechartsWrapper-DLFC9k-P.js";import"./index-B_5mHYiA.js";import"./CartesianChart-DPS34irs.js";import"./chartDataContext-CYe6eIs4.js";import"./CategoricalChart-C1P-_dY1.js";import"./Curve-CPjpKaHf.js";import"./step-uDZ4fNKk.js";import"./path-DyVhHtw_.js";import"./activeStyles-RllIEBru.js";import"./useAnimationId-BwwRxKkz.js";import"./ActivePoints-Neb4G9yW.js";import"./Dot-CO3qiad8.js";import"./RegisterGraphicalItemId-DvaseCYm.js";import"./ErrorBarContext-CxZNMZBW.js";import"./SetGraphicalItem-Csb9S6BZ.js";import"./getRadiusAndStrokeWidthFromDot-CAu9psjm.js";import"./ActiveShapeUtils-MJJt-1xu.js";import"./useEffectiveDataKey-YwyUQgbT.js";import"./useElementOffset-N652NpPr.js";import"./uniqBy-CMP_GnVX.js";import"./iteratee-d_6xpuw1.js";import"./isArguments-yB-y1yaH.js";import"./Cross-D0i554_n.js";import"./Rectangle-DPp-8w2u.js";import"./util-Dxo8gN5i.js";import"./Sector-DyIsjjrt.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
