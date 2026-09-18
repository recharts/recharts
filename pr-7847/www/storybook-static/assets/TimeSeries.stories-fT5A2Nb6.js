import{R as e}from"./iframe-lcK-LQ4H.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-U3uV11HY.js";import{R as h}from"./zIndexSlice-3xiznc3T.js";import{C as g}from"./ComposedChart-CqUZzBcz.js";import{L as x}from"./Line-D4XTruOS.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BGtfSAS2.js";import{T as V}from"./Tooltip-UefMF0_o.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-lKQduzRC.js";import"./Layer-BrJH3_5y.js";import"./resolveDefaultProps-CrEw_DbM.js";import"./Text-B9QwYOBa.js";import"./DOMUtils-DOyQnx6z.js";import"./isWellBehavedNumber-BNK5esbm.js";import"./useId-BdIxfVgV.js";import"./useBackwardsCompatibleTheme-CRXuFPOK.js";import"./Label-DdX71Pmy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-peV_8dsk.js";import"./index-BJrdch9J.js";import"./index-DR4LcHaa.js";import"./types-iT_AM-R8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-OgdWdUmt.js";import"./throttle-obGnf5ET.js";import"./index-Bq7_2YG0.js";import"./index-CO-uW0YU.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-D3b-43EA.js";import"./axisSelectors-BQOoWmyr.js";import"./index-PavZfgBD.js";import"./CartesianChart-DDPqNkhD.js";import"./chartDataContext-JPZtnlxr.js";import"./CategoricalChart-P0fttYEL.js";import"./Curve-CH5D8euf.js";import"./step-865XHt_v.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BUrFNy4t.js";import"./useAnimationId-CN4TcOgU.js";import"./ActivePoints-B9F3Cvj-.js";import"./Dot-JEYqyfVW.js";import"./RegisterGraphicalItemId-O_HgkeJ0.js";import"./ErrorBarContext-DAMWbZmD.js";import"./GraphicalItemClipPath-oVlg1Xnl.js";import"./SetGraphicalItem-DZtp094S.js";import"./getRadiusAndStrokeWidthFromDot-C4ZSDNB8.js";import"./ActiveShapeUtils-glOfs5rY.js";import"./useGraphicalItemIdentity-MQMbS4BR.js";import"./useElementOffset-XRlntQB2.js";import"./uniqBy-CR5sds_H.js";import"./iteratee-DQhw2g_P.js";import"./Cross-B2ICJeQE.js";import"./Rectangle-WUBSuO5y.js";import"./util-Dxo8gN5i.js";import"./Sector-DKlqv5u1.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
