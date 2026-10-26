import{R as e}from"./iframe-CrWtoPAX.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-6CbcM3Se.js";import{R as h}from"./zIndexSlice-DMPrIjTD.js";import{C as g}from"./ComposedChart-CrLeVh0b.js";import{L as x}from"./Line-x9GU49wt.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Pq_E9xXF.js";import{T as V}from"./Tooltip-CZyZKcRt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-D6bXO0ci.js";import"./Layer-Bc-8Aj4A.js";import"./resolveDefaultProps-Cl_vq3lE.js";import"./Text-CyQrUZZg.js";import"./pageBackground-B_OyKJz4.js";import"./useId-CevBbkmx.js";import"./ZIndexLayer-mnQ0PTjZ.js";import"./index-CQ_XqvtJ.js";import"./index-D6uwIsxD.js";import"./Label-9ANtnaX1.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DnnAPhgk.js";import"./throttle-ByP8enHW.js";import"./dataEntryStyles-CcroDQaP.js";import"./types-sEVDNypc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CetFWcek.js";import"./index-gHXYJ75j.js";import"./index-BbFlaPL7.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-B0-aB2Y5.js";import"./RechartsWrapper-MJk6C7sG.js";import"./index-IYAiXkdd.js";import"./CartesianChart--l1pMg4t.js";import"./chartDataContext-BATi9LfG.js";import"./CategoricalChart-CRgz8QMs.js";import"./Curve-QjHrFrYT.js";import"./step-xie03U5d.js";import"./path-DyVhHtw_.js";import"./activeStyles-D8qfovJq.js";import"./useAnimationId-DIVMX3ZS.js";import"./ActivePoints-cB0BOXIY.js";import"./Dot-BpyqQ2DG.js";import"./Symbols-BmauIne2.js";import"./symbol-C4lC381C.js";import"./RegisterGraphicalItemId-DIduc0Gm.js";import"./ErrorBarContext-BGhx7PeS.js";import"./SetGraphicalItem-B4ZcrH9I.js";import"./getRadiusAndStrokeWidthFromDot-CuJjKg3J.js";import"./ActiveShapeUtils-BHD3PSWQ.js";import"./useEffectiveDataKey-DRFzjTt4.js";import"./useElementOffset-VqEKxajU.js";import"./uniqBy-CQj06pFN.js";import"./iteratee-DXOgM9Ce.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Nl2ZcA6z.js";import"./Rectangle-CNbdX1IY.js";import"./util-Dxo8gN5i.js";import"./Sector-D_zKCeqT.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
